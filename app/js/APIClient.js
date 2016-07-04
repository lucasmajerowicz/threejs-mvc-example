export default class APIClient {
    getRecord() {
        return APIClient.galaxyRecord;
    }
}

APIClient.galaxyRecord = {
    name: 'Milky Way',
    solarSystems: [
        {
            name: 'Solar System',
            props: {},
            sun: {
                name: 'Sun',
                props: {
                    radius: 2,
                    texture: 'images/sunmap.jpg'
                }
            },
            planets: [
                {name: 'Mercury',
                    props: {
                        texture: 'images/mercurymap.jpg',
                        orbitalSpeed: 0.01,
                        rotationSpeed: 0.05,
                        radius: 0.4,
                        distance: 5
                    }
                },
                {name: 'Venus',
                    props: {
                        texture: 'images/venusmap.jpg',
                        orbitalSpeed: 0.007,
                        rotationSpeed: -0.05,
                        radius: 0.8,
                        distance: 10
                    }
                },
                {name: 'Earth',
                    satellites: [
                        {
                            name: 'Moon',
                            props: {
                                texture: 'images/moonmap1k.jpg',
                                orbitalSpeed: -0.05,
                                rotationSpeed: 0.01,
                                radius: 0.4,
                                distance: 2
                            }
                        }
                    ],
                    props: {
                        texture: 'images/2_no_clouds_4k.jpg',
                        orbitalSpeed: 0.006,
                        rotationSpeed: 0.005,
                        radius: 0.8,
                        distance: 15
                    }
                },
                {name: 'Mars',
                    props: {
                        texture: 'images/marsmap1k.jpg',
                        orbitalSpeed: 0.005,
                        rotationSpeed: 0.005,
                        radius: 0.6,
                        distance: 20
                    }
                },
                {name: 'Jupiter',
                    props: {
                        texture: 'images/jupitermap.jpg',
                        orbitalSpeed: 0.003,
                        rotationSpeed: 0.0025,
                        radius: 1.6,
                        distance: 26
                    }
                },
                {name: 'Saturn',
                    props: {
                        texture: 'images/saturnmap.jpg',
                        orbitalSpeed: 0.002,
                        rotationSpeed: 0.0025,
                        radius: 1.2,
                        distance: 33
                    }
                },
                {name: 'Uranus',
                    props: {
                        texture: 'images/uranusmap.jpg',
                        orbitalSpeed: 0.002,
                        rotationSpeed: -0.004,
                        radius: 1,
                        distance: 40
                    }
                },
                {name: 'Neptune',
                    props: {
                        texture: 'images/neptunemap.jpg',
                        orbitalSpeed: 0.0015,
                        rotationSpeed: 0.004,
                        radius: 0.9,
                        distance: 50
                    }
                },
                {name: 'Pluto',
                    props: {
                        texture: 'images/plutomap1k.jpg',
                        orbitalSpeed: 0.002,
                        rotationSpeed: 0.003,
                        radius: 0.4,
                        distance: 60
                    }
                }
            ]
        }
    ]
};