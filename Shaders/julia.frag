#version 330 core
out vec4 FragColor;

in vec2 TexCoord;

// texture samplers
uniform sampler2D texture1;
uniform vec2 c;
uniform vec2 center;
uniform float scale;
uniform int iter;

void main()
{
	vec2 z;
	z.x = 3.0 * (TexCoord.x - 0.5) * scale + center.x;
	z.y = 2.0 * (TexCoord.y - 0.5) * scale + center.y;

    int i;
    for(i=0; i<iter; i++) {
        float x = (z.x * z.x - z.y * z.y) + c.x;
        float y = (z.y * z.x + z.x * z.y) + c.y;


        if((x * x + y * y) > 4.0) break;
        z.x = x;
        z.y = y;
    }
	

    FragColor = texture(texture1, vec2((i == iter ? 0.0 : float(i)) / 100.0), 1);

	//FragColor = texture(texture1, TexCoord);
}