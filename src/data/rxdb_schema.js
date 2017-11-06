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

export const mapListSchema = {
    title: 'map schema',
    description: 'map data',
    version: 0,
    type: 'object',
    properties: {
        name: {
            type: 'string',
            primary: true
        },
        maps: {
            type: 'array',
            description: 'lists the maps of the given maptype',
            item: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    note: {
                        type: 'integer'
                    }
                }
            }
        }
    }
};

export const configSchema = function(){
    const padSchema = {
        type: 'object',
        properties: {
            notes: {
                type: "array",
                description: 'lists notes attached to a pad',
                item: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string'
                        },
                        note: {
                            type: 'integer'
                        },
                        min_vel: {
                            type: 'integer'
                        },
                        max_vel: {
                            type: 'integer'
                        },
                        threshold: {
                            type: 'integer'
                        },
                        channel: {
                            type: 'integer'
                        },
                        port: {
                            type: 'string'
                        }
                    }
                }
            }
        }
    }

    return {
        title: 'config schema',
        description: 'config data',
        version: 0,
        type: 'object',
        properties: {
            id: {
                type: 'integer',
            },
            name: {
                type: 'string',
                primary: true
            },
            plugin: {
                type: 'string',
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
            },
            maps: {
                type: 'array',
                description: 'list of pad maps for each mode',
                item: {
                    type: 'object',
                    properties: {
                        pad0: padSchema,
                        pad1: padSchema,
                        pad2: padSchema,
                        pad3: padSchema,
                        pad4: padSchema,
                        pad5: padSchema,
                        pad6: padSchema,
                        pad7: padSchema,
                        pad8: padSchema,
                        pad9: padSchema,
                        pad10: padSchema,
                        pad11: padSchema,
                        pad12: padSchema,
                        pad13: padSchema,
                        pad14: padSchema,
                        pad15: padSchema,
                    }
                }
    
            }
        },
        required: ["id"]
    }

};



