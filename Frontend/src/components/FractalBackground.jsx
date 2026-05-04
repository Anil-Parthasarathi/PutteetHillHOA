import { useEffect, useRef } from 'react';
import normalMapSrc from '../assets/hero-bg-normal.png';

const FractalBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl', { alpha: true });

        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        // Vertex Shader
        const vsSource = `
            attribute vec2 a_position;
            varying vec2 v_texCoord;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
                // Map a_position from [-1, 1] to [0, 1] for texture coordinates
                v_texCoord = a_position * 0.5 + 0.5;
            }
        `;

        // Fragment Shader (Circular Pulse)
        const fsSource = `
            precision highp float;
            uniform vec2 u_resolution;
            uniform float u_time;
            uniform sampler2D u_normalMap;
            varying vec2 v_texCoord;
            
            void main() {
                // normalized pixel coordinates centered at 0,0
                vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
                
                // Color configuration
                vec3 baseColor = vec3(0.7, 0.55, 0.25); // Gold/Bronze
                
                // Distance from center
                float d = length(uv);
                
                // Pulse logic
                float speed = 0.1;
                float time = u_time * speed;
                float radius = fract(time) * 2.5; // Expanding radius
                
                // Ring effect
                float ringThickness = 0.08;
                float ring = smoothstep(ringThickness, 0.0, abs(d - radius));
                
                // --- Normal map lighting ---
                // Sample the normal map using the texture coordinate mapped from the vertex position
                vec4 normalTex = texture2D(u_normalMap, v_texCoord);
                
                // Normal maps typically map [0,1] to [-1,1], so convert the RGB values
                vec3 N = normalize(normalTex.rgb * 2.0 - 1.0);
                
                // If bumps look indented, flip Y inverted via N.y = -N.y; 
                // But let's assume standard format for now.
                
                // Direction from fragment to center of the canvas 
                // protect against uv being exactly 0 to avoid division by 0
                vec2 dir = d > 0.0 ? (uv / d) : vec2(1.0, 0.0);
                
                // Distance from the fragment to the expanding ring itself
                // A positive or negative distance makes the light hit opposite sides of the bumps as it passes!
                vec3 lightVec = vec3(dir * (radius - d), 0.06); 
                vec3 L = normalize(lightVec);
                
                // Diffuse reflection (Lambertian reflectance)
                float diffuse = max(dot(N, L), 0.0);
                
                // Specular reflection (Blinn-Phong)
                vec3 viewDir = vec3(0.0, 0.0, 1.0); // Looking straight at the screen
                vec3 halfDir = normalize(L + viewDir);
                float spec = pow(max(dot(N, halfDir), 0.0), 32.0);
                
                // Combine lighting
                float ambient = 0.2; // Ambient glow
                float lightIntensity = diffuse * 1.0 + spec * 2.5; // "Light" intensity from the expanding ring
                
                // Final color uses the ring mask, tinted by baseColor, and illuminated
                vec3 finalColor = baseColor * ring * (ambient + lightIntensity);
                
                // Scale alpha by lighting so bright highlights pop more vividly
                float alpha = min(ring * (0.4 + lightIntensity * 0.5), 0.9);
                
                gl_FragColor = vec4(finalColor, alpha); 
            }
        `;

        const compileShader = (type, source) => {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compilation error', gl.getInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program link error', gl.getProgramInfoLog(program));
            return;
        }

        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "a_position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
        const timeLocation = gl.getUniformLocation(program, "u_time");
        const normalMapLocation = gl.getUniformLocation(program, "u_normalMap");

        // Set up the normal map texture with a default custom color pixel to prevent black rendering initially
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([128, 128, 255, 255]));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

        // Load the actual normal map image
        const image = new Image();
        image.src = normalMapSrc;
        image.onload = () => {
            gl.bindTexture(gl.TEXTURE_2D, texture);
            // Flip the Y axis so the texture appears the right way up in WebGL
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        };

        const resizeCanvasToDisplaySize = (canvas) => {
            const displayWidth = canvas.clientWidth;
            const displayHeight = canvas.clientHeight;

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                return true;
            }
            return false;
        };

        let animationFrameId;
        const render = (time) => {
            time *= 0.001; // convert to seconds
            resizeCanvasToDisplaySize(gl.canvas);

            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

            // Clear the canvas, making it transparent
            gl.clearColor(0.0, 0.0, 0.0, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            // Enable blending setup to allow gl_FragColor's alpha to compose with the transparent background
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
            gl.uniform1f(timeLocation, time);

            // Bind the texture to texture unit 0
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(normalMapLocation, 0);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0 // Behind the hero-overlay, over the background image
            }}
        />
    );
};

export default FractalBackground;
