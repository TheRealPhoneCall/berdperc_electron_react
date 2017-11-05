export const percSchema = {
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

export const songSchema = {
    title: 'song schema',
    description: 'song data',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'integer',
        },
        genre: {
            type: 'string',
            primary: true
        }
    },
    required: ["id"]
};

export const configSchema = {
    title: 'config schema',
    description: 'config data',
    version: 0,
    type: 'object',
    properties: {
        id: {
            type: 'integer',
        },
        name: {
            type: 'integer',
            primary: true
        },
        plugin_map: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        used_for: {
            type: 'string',
        },
        genre: {
            type: 'string',
        }
    },
    required: ["id"]
};



