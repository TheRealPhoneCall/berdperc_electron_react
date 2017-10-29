export const percussionSchema = {
    title: 'percussion schema',
    description: 'percussion data',
    version: 0,
    type: 'object',
    properties: {
        name: {
            type: 'string',
            primary: true
        },
        slug: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        image: {
            type: 'string'
        },
        image_front: {
            type: 'string'
        },
        image_top: {
            type: 'string'
        },
        logo: {
            type: 'string'
        },
        image_side: {
            type: 'string'
        },
        default_map: {
            type: 'string'
        },
        pads: {
            type: 'array',
            description: 'pad data of the percussion',
            uniqueItems: true,
            item: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    pad_type: {
                        type: 'string'
                    }
                }
            }

        }
    },
    required: ['slug', 'image', 'image_front', 'default_map']
};

