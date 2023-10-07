import React, {useState} from "react";
import SplitPane, {Pane} from "split-pane-react";
import 'split-pane-react/esm/themes/default.css';
import ExplorerDirectoriesPane from "./ExplorerDirectoriesPane";
import ExplorerContentPane from "./ExplorerContentPane";
import {ExplorerDirectoriesDataType} from "./Explorer.types";

const directories: ExplorerDirectoriesDataType = {
    name: 'react-cloud-v3',
    children: [
        {
            "id": "651fbdcaf7e0df555bebca2e",
            "name": "Jordan",
            "children": [
                {
                    "id": "651fbdcaf87b26273bb68308",
                    "name": "eiusmod",
                    "children": [
                        {
                            "id": "651fbdca659edbbe25227ac7",
                            "name": "quis",
                            "children": [
                                {
                                    "id": "651fbdcaac0ce84d718fee8d",
                                    "name": "eu",
                                    "children": [
                                        {
                                            "id": "651fbdca6f7d65d1d17ee1c4",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca166897796db672f5",
                                            "name": "dolor"
                                        },
                                        {
                                            "id": "651fbdcaad4a5cf8d28975d4",
                                            "name": "sunt"
                                        },
                                        {
                                            "id": "651fbdca181fa3e1669b8b60",
                                            "name": "velit"
                                        },
                                        {
                                            "id": "651fbdcae3af4f02bf7e25ff",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdca89c12b9126a423cc",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdcaf0cc5818f81ef077",
                                            "name": "esse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "651fbdcabc0c6a94bef8033b",
                    "name": "nulla",
                    "children": [
                        {
                            "id": "651fbdca28cca4e7720372e7",
                            "name": "sit",
                            "children": [
                                {
                                    "id": "651fbdca5eb6c79717f7052e",
                                    "name": "voluptate",
                                    "children": [
                                        {
                                            "id": "651fbdca6094db98645ce225",
                                            "name": "veniam"
                                        },
                                        {
                                            "id": "651fbdca8b85f4c99748e14e",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdca15cf488d59094c70",
                                            "name": "duis"
                                        },
                                        {
                                            "id": "651fbdca678e37d69a91e92f",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdca4260b145e66c46b0",
                                            "name": "aute"
                                        },
                                        {
                                            "id": "651fbdcab5eb90874450dd32",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdca3c3e6a5c7b0e33e4",
                                            "name": "ullamco"
                                        },
                                        {
                                            "id": "651fbdcae2fa0b5104d79919",
                                            "name": "mollit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca210b361b9151b17f",
                                    "name": "ipsum",
                                    "children": [
                                        {
                                            "id": "651fbdcacf3e7cbddbb0697b",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdcaa9d458024bf21fab",
                                            "name": "ullamco"
                                        },
                                        {
                                            "id": "651fbdca094cb3e1d69b6d7f",
                                            "name": "incididunt"
                                        },
                                        {
                                            "id": "651fbdcae150b50d6e69605a",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdcaf88cea36d4f1822a",
                                            "name": "et"
                                        },
                                        {
                                            "id": "651fbdca69ca2ffc6c8da1f1",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdcae31ae3f92bdf9cf8",
                                            "name": "velit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca573bb5688864d491",
                                    "name": "ullamco",
                                    "children": [
                                        {
                                            "id": "651fbdca6a1c03921370a2aa",
                                            "name": "ullamco"
                                        },
                                        {
                                            "id": "651fbdca04ac7451b5bd1040",
                                            "name": "tempor"
                                        },
                                        {
                                            "id": "651fbdcaec421fcad1bf915a",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdca610ffde031a3ffaa",
                                            "name": "duis"
                                        },
                                        {
                                            "id": "651fbdca3df8d29b6fc75995",
                                            "name": "quis"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca42f1d34b79747037",
            "name": "Miller",
            "children": [
                {
                    "id": "651fbdca3c5aba866ecfa34b",
                    "name": "irure",
                    "children": [
                        {
                            "id": "651fbdca333b56d5ce16efed",
                            "name": "in",
                            "children": [
                                {
                                    "id": "651fbdcad924e832cdebf1a8",
                                    "name": "ut",
                                    "children": [
                                        {
                                            "id": "651fbdca7dcec423032d6042",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdcaffe2e127ec8e68c8",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdcaf6e5d6764b09c3a0",
                                            "name": "non"
                                        },
                                        {
                                            "id": "651fbdca83e2a1edb0239100",
                                            "name": "eiusmod"
                                        },
                                        {
                                            "id": "651fbdcad966a8caa2f1a147",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdcaddf415a970539c2a",
                                            "name": "ipsum"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca4554872b8549ac78",
                                    "name": "aute",
                                    "children": [
                                        {
                                            "id": "651fbdcaec0994b8dbe56501",
                                            "name": "nisi"
                                        },
                                        {
                                            "id": "651fbdca4f8b4fa95f956feb",
                                            "name": "nisi"
                                        },
                                        {
                                            "id": "651fbdca93fab712afc965c4",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdcaebb152a19476a6bf",
                                            "name": "ullamco"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "651fbdca601b8d506c3becfa",
                    "name": "duis",
                    "children": [
                        {
                            "id": "651fbdca689bd318c85f911e",
                            "name": "adipisicing",
                            "children": [
                                {
                                    "id": "651fbdcab6d45ed6216c98b1",
                                    "name": "laborum",
                                    "children": [
                                        {
                                            "id": "651fbdca15f0457ea3efdae6",
                                            "name": "est"
                                        },
                                        {
                                            "id": "651fbdca5f1c25b0f7b0f392",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca4ac781bcd9611e91",
                                            "name": "reprehenderit"
                                        },
                                        {
                                            "id": "651fbdcab96a1461fe6e69cc",
                                            "name": "non"
                                        },
                                        {
                                            "id": "651fbdca5a4a6afd8d15d583",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdca15247e7c64da4ff1",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdca3c400e4220f304fb",
                                            "name": "excepteur"
                                        },
                                        {
                                            "id": "651fbdcac0af8fefa7f7d28b",
                                            "name": "elit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca4b6adbb1494a04f5",
                                    "name": "enim",
                                    "children": [
                                        {
                                            "id": "651fbdca8ceff2cc44caef93",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdcadaaae7bfd9647eb2",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdcacbed6126a45e99ff",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdca2275c82df0837e15",
                                            "name": "fugiat"
                                        },
                                        {
                                            "id": "651fbdcaf4c99229e10e0281",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca6a1cfddb34640582",
                                            "name": "labore"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdca36b625ac52d57270",
                            "name": "dolor",
                            "children": [
                                {
                                    "id": "651fbdcac9f5d1b615ce40f0",
                                    "name": "consectetur",
                                    "children": [
                                        {
                                            "id": "651fbdcaf898eaca221fbcaf",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdcac95bb8e59ce42bdf",
                                            "name": "aute"
                                        },
                                        {
                                            "id": "651fbdca56d51a646cbb2e7b",
                                            "name": "ea"
                                        },
                                        {
                                            "id": "651fbdca594598e2df768eba",
                                            "name": "sunt"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca9a9d8d42b0b8c866",
                                    "name": "eu",
                                    "children": [
                                        {
                                            "id": "651fbdcad569d8f66968b1c1",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdcaf7ca0734b9a63343",
                                            "name": "eiusmod"
                                        },
                                        {
                                            "id": "651fbdca5051642c354db35e",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca98e61a1dad320e06",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdcac1193b54144f986a",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdca8f6d1f9d0bdebc80",
                                            "name": "enim"
                                        },
                                        {
                                            "id": "651fbdca5e4a17f8bd360040",
                                            "name": "enim"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca5e4f2453d72db3eb",
            "name": "Pittman",
            "children": [
                {
                    "id": "651fbdca7cedbf6f66028ce3",
                    "name": "consequat",
                    "children": [
                        {
                            "id": "651fbdcad13b12cecb74d4d0",
                            "name": "consequat",
                            "children": [
                                {
                                    "id": "651fbdcad2ee09f64d6106b2",
                                    "name": "fugiat",
                                    "children": [
                                        {
                                            "id": "651fbdcab20741478f24d2e2",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdcab070fb8545b37b9c",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca84aae864fe92394b",
                                            "name": "dolore"
                                        },
                                        {
                                            "id": "651fbdca3914ef0e6052c9c8",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdca6944b73ba194937b",
                                            "name": "dolor"
                                        },
                                        {
                                            "id": "651fbdcacaf961e6543748e7",
                                            "name": "nisi"
                                        },
                                        {
                                            "id": "651fbdca9887a65589df4596",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdca0bc8bb052a331cf0",
                                            "name": "duis"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca826c6b921f61dbf8",
                                    "name": "amet",
                                    "children": [
                                        {
                                            "id": "651fbdca06f55afd1ea08249",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdca8c9af8f9a435fa10",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca4dfee80a80f98fcf",
                                            "name": "sint"
                                        },
                                        {
                                            "id": "651fbdca12d4196ebd1c269f",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcaf0c758433b43cea4",
                                            "name": "eiusmod"
                                        },
                                        {
                                            "id": "651fbdca831d22c97fcb3f15",
                                            "name": "aute"
                                        },
                                        {
                                            "id": "651fbdcab587371a9e3f18a6",
                                            "name": "id"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca9d187c8842aa3072",
                                    "name": "culpa",
                                    "children": [
                                        {
                                            "id": "651fbdcab7abff107fc8fef4",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdcab0b4c30286a189ed",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdca5221388f70b0091a",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdcac04df224d92e28f3",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca4be7e0014178af10",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdca9d8f56ed9a1056df",
                                            "name": "cupidatat"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca2c449ed00984abf2",
                                    "name": "minim",
                                    "children": [
                                        {
                                            "id": "651fbdca6c7e2142b68d73d3",
                                            "name": "deserunt"
                                        },
                                        {
                                            "id": "651fbdca6dda3c23e4960263",
                                            "name": "ea"
                                        },
                                        {
                                            "id": "651fbdcaf84546dfcfb29bab",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcac9058634c46715fa",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca702a6ead8236a729",
                                            "name": "cillum"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdcae8bc4e539c50e88c",
                            "name": "ullamco",
                            "children": [
                                {
                                    "id": "651fbdca2c1133365b92197f",
                                    "name": "nostrud",
                                    "children": [
                                        {
                                            "id": "651fbdca06301f739e3403d3",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdcabbf901ad3a1b309a",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca42c009856bacc764",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdcaaff0374833f620b6",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca6b8d170b3ebe7e16",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdca2776c5776eccba8c",
                                            "name": "non"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca48afb82f594aacef",
                                    "name": "culpa",
                                    "children": [
                                        {
                                            "id": "651fbdca981fbf56553be6a0",
                                            "name": "pariatur"
                                        },
                                        {
                                            "id": "651fbdcaa44dff889720a95d",
                                            "name": "enim"
                                        },
                                        {
                                            "id": "651fbdca531433bd56de2b4f",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdca985dde1a391861cb",
                                            "name": "sint"
                                        },
                                        {
                                            "id": "651fbdca5e59fd8676eed201",
                                            "name": "quis"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaa76bcb6ef65c5bdf",
                                    "name": "enim",
                                    "children": [
                                        {
                                            "id": "651fbdcad46044dd53c61cab",
                                            "name": "fugiat"
                                        },
                                        {
                                            "id": "651fbdcac0cb7e402d866154",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdcaecdb59f349cf50a6",
                                            "name": "cupidatat"
                                        },
                                        {
                                            "id": "651fbdca81d92a196abe4222",
                                            "name": "ea"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca9e6d10c155c2171c",
                                    "name": "laborum",
                                    "children": [
                                        {
                                            "id": "651fbdca905d335e05140a39",
                                            "name": "fugiat"
                                        },
                                        {
                                            "id": "651fbdca71bb95e8516c0b59",
                                            "name": "culpa"
                                        },
                                        {
                                            "id": "651fbdca5348ebb663a30548",
                                            "name": "deserunt"
                                        },
                                        {
                                            "id": "651fbdca4cce596e8382eb47",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdcac81e8664e7574f21",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdcac64bba514be985af",
                                            "name": "labore"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdcafc8074ee7e9916e1",
            "name": "Lolita",
            "children": [
                {
                    "id": "651fbdca64867d8d80026635",
                    "name": "incididunt",
                    "children": [
                        {
                            "id": "651fbdca7175f0bd2f31a8bb",
                            "name": "aute",
                            "children": [
                                {
                                    "id": "651fbdca59d173a7b3ab0353",
                                    "name": "qui",
                                    "children": [
                                        {
                                            "id": "651fbdca1cacd127ac87fa5e",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdca35de77e0d929ca68",
                                            "name": "et"
                                        },
                                        {
                                            "id": "651fbdcaa328d31defed88af",
                                            "name": "ex"
                                        },
                                        {
                                            "id": "651fbdcac5440c61699f54a8",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdca2c9aefe0ed284020",
                                            "name": "nulla"
                                        },
                                        {
                                            "id": "651fbdca1a3a470a5449cb00",
                                            "name": "fugiat"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca2ffb4d5eb60eba66",
                                    "name": "proident",
                                    "children": [
                                        {
                                            "id": "651fbdcad174d26b746b8714",
                                            "name": "velit"
                                        },
                                        {
                                            "id": "651fbdca62610893e586ee87",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdca068232e5ef89b128",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdcafa294792de822ea2",
                                            "name": "ullamco"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca9a7080ae90068c22",
                                    "name": "anim",
                                    "children": [
                                        {
                                            "id": "651fbdca660035ec60680c05",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcafadb85f90a9fdf22",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcad6859181e11db1aa",
                                            "name": "est"
                                        },
                                        {
                                            "id": "651fbdca619a0339e49fb5c3",
                                            "name": "aliqua"
                                        },
                                        {
                                            "id": "651fbdca8d91a574e2eae6bb",
                                            "name": "sint"
                                        },
                                        {
                                            "id": "651fbdca4c4b41759e5db2ea",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdcacbbcecdf052b7430",
                                            "name": "minim"
                                        },
                                        {
                                            "id": "651fbdcac093d16f0cfcbcf1",
                                            "name": "magna"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcac66a099e5f253fed",
                                    "name": "sunt",
                                    "children": [
                                        {
                                            "id": "651fbdca017085bc4240148c",
                                            "name": "minim"
                                        },
                                        {
                                            "id": "651fbdcac24408ffbc65eb31",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdca6d51e24c41c8c450",
                                            "name": "nisi"
                                        },
                                        {
                                            "id": "651fbdcaf4f2ccd3e72ed75f",
                                            "name": "tempor"
                                        },
                                        {
                                            "id": "651fbdca146b74b6184acae5",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdca106155b7d168147f",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdca324bd4c10e8c6e59",
                                            "name": "dolore"
                                        },
                                        {
                                            "id": "651fbdcabfb9494e7271d8d9",
                                            "name": "veniam"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdcaff0a062b5f24f138",
            "name": "Galloway",
            "children": [
                {
                    "id": "651fbdca2363bf51f0f900cc",
                    "name": "laboris",
                    "children": [
                        {
                            "id": "651fbdca155146c258c9118e",
                            "name": "voluptate",
                            "children": [
                                {
                                    "id": "651fbdca80378ebd9fb23b31",
                                    "name": "exercitation",
                                    "children": [
                                        {
                                            "id": "651fbdca5d787404c1a2f88f",
                                            "name": "et"
                                        },
                                        {
                                            "id": "651fbdca3ab78c3d30feea99",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdcabc392032d4099320",
                                            "name": "laboris"
                                        },
                                        {
                                            "id": "651fbdcaa0995c4367f9e490",
                                            "name": "in"
                                        },
                                        {
                                            "id": "651fbdcaf533f197cef99d37",
                                            "name": "incididunt"
                                        },
                                        {
                                            "id": "651fbdcafc906b6489adec47",
                                            "name": "nulla"
                                        },
                                        {
                                            "id": "651fbdca0a2aa234f431fb72",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca00f33d79057931de",
                                            "name": "sit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcac10651c8c0611439",
                                    "name": "tempor",
                                    "children": [
                                        {
                                            "id": "651fbdcac2841ef079f33be6",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdcadb6cd0b6828f407a",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdcadb47db9a84eb6f00",
                                            "name": "pariatur"
                                        },
                                        {
                                            "id": "651fbdca69eb5aa4580ae405",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdca186ae8539329bf27",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdcac9ca6cb3c36044f0",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdca4115145e24969cdb",
                                            "name": "Lorem"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "651fbdca02b081be35bf49c7",
                    "name": "ad",
                    "children": [
                        {
                            "id": "651fbdcac136cd2df83723d1",
                            "name": "sint",
                            "children": [
                                {
                                    "id": "651fbdcad79a07232c41dc7b",
                                    "name": "ipsum",
                                    "children": [
                                        {
                                            "id": "651fbdca66c020110bdfee28",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdca87b80566460183c1",
                                            "name": "enim"
                                        },
                                        {
                                            "id": "651fbdca3b5751f019727a71",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcacb1ebc4425a5518d",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca37f1630391edc595",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdcae9b49a85fadeda95",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdcab5438fbdf06a2341",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdca03cb2b273888aa1e",
                                            "name": "sit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaa9a11c95f589c126",
                                    "name": "nostrud",
                                    "children": [
                                        {
                                            "id": "651fbdcacf89a77dc89ef4c0",
                                            "name": "aute"
                                        },
                                        {
                                            "id": "651fbdca3f11ea2520f02f16",
                                            "name": "est"
                                        },
                                        {
                                            "id": "651fbdca391fc185b7aea585",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdcac08d4e33f24449fb",
                                            "name": "exercitation"
                                        },
                                        {
                                            "id": "651fbdca3e06433886a97446",
                                            "name": "nulla"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaec6594fef88cb29d",
                                    "name": "laboris",
                                    "children": [
                                        {
                                            "id": "651fbdcaf4a7b8f3d43e26e7",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdcafb3597435d852ad1",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdcac7e290b857e2fc98",
                                            "name": "veniam"
                                        },
                                        {
                                            "id": "651fbdca868faa50beeba1b6",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdca73b63eb32fb931f9",
                                            "name": "amet"
                                        },
                                        {
                                            "id": "651fbdca6fab91d6b4a040ac",
                                            "name": "nulla"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca8be49daa6e955a1d",
                                    "name": "est",
                                    "children": [
                                        {
                                            "id": "651fbdca4061cb19f082d9fd",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdca987dd84bf42da973",
                                            "name": "exercitation"
                                        },
                                        {
                                            "id": "651fbdca73e999348c103d93",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca21a5b0d11d7ad99c",
                                            "name": "exercitation"
                                        },
                                        {
                                            "id": "651fbdca9b3ab78f4c27c23a",
                                            "name": "culpa"
                                        },
                                        {
                                            "id": "651fbdcad11b21d8882c66c5",
                                            "name": "dolore"
                                        },
                                        {
                                            "id": "651fbdca3f5358ff571464d3",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdcad592eaef3366fd7f",
                                            "name": "nisi"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca80b541dc3c89725b",
            "name": "Bette",
            "children": [
                {
                    "id": "651fbdca4eab0346f60a095a",
                    "name": "proident",
                    "children": [
                        {
                            "id": "651fbdca7e2b046aa44ed74c",
                            "name": "duis",
                            "children": [
                                {
                                    "id": "651fbdca2d863aa9ffeb9a40",
                                    "name": "ullamco",
                                    "children": [
                                        {
                                            "id": "651fbdca435a3611b357e057",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca84b0c749131ab729",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca99dae5765848973f",
                                            "name": "sunt"
                                        },
                                        {
                                            "id": "651fbdca8787934153e53c09",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdca49428fca70e19cae",
                                            "name": "cupidatat"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca3067290caa871731",
                                    "name": "dolore",
                                    "children": [
                                        {
                                            "id": "651fbdca26624c63d5782aeb",
                                            "name": "laboris"
                                        },
                                        {
                                            "id": "651fbdca4805c519599c0d6b",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdcac6028aa027c3ddb8",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcafeda9aea100542c0",
                                            "name": "esse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "651fbdca1dafb5a8bfcb4f1d",
                    "name": "anim",
                    "children": [
                        {
                            "id": "651fbdcaff8918358081a084",
                            "name": "velit",
                            "children": [
                                {
                                    "id": "651fbdcaec8bf53fcbfb9cf8",
                                    "name": "dolore",
                                    "children": [
                                        {
                                            "id": "651fbdcafd2862ef5350c352",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca52972902ffdeb5c8",
                                            "name": "laboris"
                                        },
                                        {
                                            "id": "651fbdca3b6357275b41eee0",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdca2873bcf674d0a363",
                                            "name": "esse"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdcafdc001c2ac50367f",
                            "name": "et",
                            "children": [
                                {
                                    "id": "651fbdca3828be4e2367750d",
                                    "name": "voluptate",
                                    "children": [
                                        {
                                            "id": "651fbdcae5f5500bda199e83",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdcac38493729c7d8ba9",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdca0943f051c189f462",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdca569ac10fda070100",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdcaa5fa4a6db5ff63aa",
                                            "name": "eu"
                                        },
                                        {
                                            "id": "651fbdca5d2a13acbcec30d2",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdcab6a6199657422486",
                                            "name": "sit"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca4cb04dd4c4a6ec2d",
                                    "name": "mollit",
                                    "children": [
                                        {
                                            "id": "651fbdcab0cc903361158aa3",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdcaa45e55ee1decc3ee",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdca32240c4a04735621",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca33a0afb08d10c5c0",
                                            "name": "ipsum"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcab86ee0bc5d65d03e",
                                    "name": "mollit",
                                    "children": [
                                        {
                                            "id": "651fbdcaeca967cdd0bbedfc",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca504f2c7a1fe8da1e",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdca10b25b073953b09a",
                                            "name": "incididunt"
                                        },
                                        {
                                            "id": "651fbdcae29a2c0b15f43803",
                                            "name": "duis"
                                        },
                                        {
                                            "id": "651fbdca32b877d197a6e4c9",
                                            "name": "reprehenderit"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdcaaa74d1649a107ed2",
            "name": "Delia",
            "children": [
                {
                    "id": "651fbdcaaccf84cf586d77c0",
                    "name": "elit",
                    "children": [
                        {
                            "id": "651fbdca615c964d426b6a83",
                            "name": "commodo",
                            "children": [
                                {
                                    "id": "651fbdca0dd5bd3ed345023f",
                                    "name": "ut",
                                    "children": [
                                        {
                                            "id": "651fbdca2939dfeedcb4855e",
                                            "name": "enim"
                                        },
                                        {
                                            "id": "651fbdca2eff78b5c6352d7b",
                                            "name": "laborum"
                                        },
                                        {
                                            "id": "651fbdcad532b0abba7e56ab",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdca8ad3edf4dbe99fca",
                                            "name": "aliquip"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcac4937f741e98870f",
                                    "name": "id",
                                    "children": [
                                        {
                                            "id": "651fbdca330a0325c495321b",
                                            "name": "dolor"
                                        },
                                        {
                                            "id": "651fbdcad7cd4f52cb8da6a0",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdca22ef5d76dbf202e5",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdcab31abe655e875b29",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdca20fe227843b5c079",
                                            "name": "non"
                                        },
                                        {
                                            "id": "651fbdcad599fad1b6fe800d",
                                            "name": "sunt"
                                        },
                                        {
                                            "id": "651fbdca5c3f5cc8a8402785",
                                            "name": "eu"
                                        },
                                        {
                                            "id": "651fbdca8b53978d5f4429e3",
                                            "name": "ad"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca3f86ad638a3c570d",
                                    "name": "quis",
                                    "children": [
                                        {
                                            "id": "651fbdca6b05a9a3341495b3",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdca3ac637fe30e9bbfb",
                                            "name": "velit"
                                        },
                                        {
                                            "id": "651fbdcab1618374c53aa2f7",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdcab4b6e0877a9fdbef",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca9bca837fc9c5e7f1",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca51c550447b3b111a",
                                            "name": "consequat"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdca4849f4e3a77c78ed",
                            "name": "dolore",
                            "children": [
                                {
                                    "id": "651fbdcadd961937653f1151",
                                    "name": "nulla",
                                    "children": [
                                        {
                                            "id": "651fbdca023a201a5207084e",
                                            "name": "minim"
                                        },
                                        {
                                            "id": "651fbdca63806a71f7712354",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdcaebcd04e2ebe700d2",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcae752f9461895f77a",
                                            "name": "laboris"
                                        },
                                        {
                                            "id": "651fbdcab47f8259a179a5c9",
                                            "name": "Lorem"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcab566a03818ce91d3",
                                    "name": "deserunt",
                                    "children": [
                                        {
                                            "id": "651fbdca1bbc9ae5d66b3d36",
                                            "name": "incididunt"
                                        },
                                        {
                                            "id": "651fbdca97176fde2a35c9ff",
                                            "name": "amet"
                                        },
                                        {
                                            "id": "651fbdca3ad5ce8415a8c73d",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca51ec94d564f839b6",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcafdc2d68186d0892f",
                                            "name": "dolor"
                                        },
                                        {
                                            "id": "651fbdca59e8938467dc00ac",
                                            "name": "ex"
                                        },
                                        {
                                            "id": "651fbdca98c6df362aecf43e",
                                            "name": "non"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "651fbdcacf52bb5370b9d5c0",
                    "name": "in",
                    "children": [
                        {
                            "id": "651fbdcae118817a0de70f44",
                            "name": "officia",
                            "children": [
                                {
                                    "id": "651fbdcab1430ef9e7c14fca",
                                    "name": "labore",
                                    "children": [
                                        {
                                            "id": "651fbdcafb034cb6798ea9c8",
                                            "name": "reprehenderit"
                                        },
                                        {
                                            "id": "651fbdca8fbb4905c6b1d2aa",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdca3ae06ef5e77ed2ff",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdca8323854914d59716",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdcaf786e47132d6038a",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdcae55268e4558f37ee",
                                            "name": "ad"
                                        },
                                        {
                                            "id": "651fbdcad660c1c2ff42913e",
                                            "name": "ullamco"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaf44ef26f8dc26f2f",
                                    "name": "et",
                                    "children": [
                                        {
                                            "id": "651fbdca27134e54def82f13",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca7e6528c0dacfc77a",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdca3e2d72e3647ed84c",
                                            "name": "tempor"
                                        },
                                        {
                                            "id": "651fbdca3796e1c1ed12f2c4",
                                            "name": "magna"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaf7872605d52cd32b",
                                    "name": "non",
                                    "children": [
                                        {
                                            "id": "651fbdca806dc0e0739db5c7",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca7976d44b47325b16",
                                            "name": "eu"
                                        },
                                        {
                                            "id": "651fbdca6e364618c1c82a91",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdca9e3d99ebe407d421",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdca6a4579c94b6910b1",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdcafb8b77764edea3fb",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdcab42de439717884c3",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdca5e80e0dc464a9bef",
                                            "name": "laborum"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca0173b926a2362c98",
                                    "name": "tempor",
                                    "children": [
                                        {
                                            "id": "651fbdca173414478fecbcb5",
                                            "name": "deserunt"
                                        },
                                        {
                                            "id": "651fbdcab61b7389f38b6d5b",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdca2fa7c8aba6d3b836",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdca6a4bcd5602113487",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdcafeb06ce4526e10ba",
                                            "name": "amet"
                                        },
                                        {
                                            "id": "651fbdca73defb5335830567",
                                            "name": "qui"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdcac227d69153574511",
                            "name": "exercitation",
                            "children": [
                                {
                                    "id": "651fbdca6b955615fbb75858",
                                    "name": "culpa",
                                    "children": [
                                        {
                                            "id": "651fbdca8836c64bd3da7452",
                                            "name": "aliqua"
                                        },
                                        {
                                            "id": "651fbdca662a66f75c518faf",
                                            "name": "laboris"
                                        },
                                        {
                                            "id": "651fbdca75a499606f625f45",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdca0f376944be5f5af5",
                                            "name": "ex"
                                        },
                                        {
                                            "id": "651fbdca891249810bb81d62",
                                            "name": "officia"
                                        },
                                        {
                                            "id": "651fbdcaeccab94bf622e2da",
                                            "name": "nulla"
                                        },
                                        {
                                            "id": "651fbdca992c09de434acac1",
                                            "name": "labore"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca0906d22951b1cc8e",
                                    "name": "elit",
                                    "children": [
                                        {
                                            "id": "651fbdca6a9a51b82e1750c6",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca2491621bb2af1961",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdcaeb9780aefdf4b75d",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca3fa88dbffc5a8f71",
                                            "name": "labore"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca4fdf05b8428d8b24",
                                    "name": "cupidatat",
                                    "children": [
                                        {
                                            "id": "651fbdcac33878007e771ab1",
                                            "name": "eu"
                                        },
                                        {
                                            "id": "651fbdca4bf75bb3b7f38f82",
                                            "name": "incididunt"
                                        },
                                        {
                                            "id": "651fbdcab528c4a796a14880",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca8269d58711f2c446",
                                            "name": "ea"
                                        },
                                        {
                                            "id": "651fbdca2cc3be4a9a7a32c4",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdca03f88c82757bd214",
                                            "name": "pariatur"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca1509cff587dc3db5",
            "name": "Elaine",
            "children": [
                {
                    "id": "651fbdcac71cae45588ac2b7",
                    "name": "esse",
                    "children": [
                        {
                            "id": "651fbdcaf9cea861a1ffe382",
                            "name": "et",
                            "children": [
                                {
                                    "id": "651fbdca9c8582fabb221ca7",
                                    "name": "laborum",
                                    "children": [
                                        {
                                            "id": "651fbdca9e2aa4b348bad213",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdca0168a2ed920f86ca",
                                            "name": "duis"
                                        },
                                        {
                                            "id": "651fbdca363ad4da3b86edc3",
                                            "name": "in"
                                        },
                                        {
                                            "id": "651fbdca034876bee8f09cec",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcac22abc73cbc26769",
                                            "name": "non"
                                        },
                                        {
                                            "id": "651fbdca80eca527f23caaca",
                                            "name": "adipisicing"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca1b6143b2824e30ee",
                                    "name": "fugiat",
                                    "children": [
                                        {
                                            "id": "651fbdcaa1fcb4336c148e1e",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcac06a9d74b88ddce3",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca3f762eb49971db73",
                                            "name": "eu"
                                        },
                                        {
                                            "id": "651fbdca004f7d73d87b3b71",
                                            "name": "sunt"
                                        },
                                        {
                                            "id": "651fbdca589a3d875216eb60",
                                            "name": "esse"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca428a29f3dd5f094f",
                                    "name": "non",
                                    "children": [
                                        {
                                            "id": "651fbdca9339d9b72d417588",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdca0afb63cdbf939497",
                                            "name": "sint"
                                        },
                                        {
                                            "id": "651fbdcace83bcbed35cf990",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdca1fc71d0ceca1100c",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdcad0bd38d730cbd72b",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdcac22bb811675e2d48",
                                            "name": "enim"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdca55a7ec955805874b",
                            "name": "culpa",
                            "children": [
                                {
                                    "id": "651fbdcac7e15a9d5d61b578",
                                    "name": "velit",
                                    "children": [
                                        {
                                            "id": "651fbdcaba6680b2ba09a9e9",
                                            "name": "elit"
                                        },
                                        {
                                            "id": "651fbdcae9351bea3ef0d4fc",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca1e426817894fac5c",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdca9def9613ec8aa18c",
                                            "name": "deserunt"
                                        },
                                        {
                                            "id": "651fbdca325cec5aca9b6244",
                                            "name": "deserunt"
                                        },
                                        {
                                            "id": "651fbdca1b0e585270c4113b",
                                            "name": "et"
                                        },
                                        {
                                            "id": "651fbdca856de9c80b38debe",
                                            "name": "adipisicing"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcaccb470e146a69012",
                                    "name": "nisi",
                                    "children": [
                                        {
                                            "id": "651fbdcabbccaa202afac9e9",
                                            "name": "excepteur"
                                        },
                                        {
                                            "id": "651fbdca2268a5cd1d7289ba",
                                            "name": "nulla"
                                        },
                                        {
                                            "id": "651fbdca887cddc066fd9c36",
                                            "name": "ex"
                                        },
                                        {
                                            "id": "651fbdca16412cf466fecd42",
                                            "name": "consectetur"
                                        },
                                        {
                                            "id": "651fbdcadc8378983c9c65f7",
                                            "name": "incididunt"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca48dc3a497b5417e8",
                                    "name": "anim",
                                    "children": [
                                        {
                                            "id": "651fbdca0c0ef9ca15dc5655",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdcaf73ae74b91683dd0",
                                            "name": "dolore"
                                        },
                                        {
                                            "id": "651fbdca7d3de7aa9c0953fb",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdcad746d3785d444393",
                                            "name": "ex"
                                        },
                                        {
                                            "id": "651fbdca597e46418b896480",
                                            "name": "labore"
                                        },
                                        {
                                            "id": "651fbdcac75460f6bb331f44",
                                            "name": "ea"
                                        },
                                        {
                                            "id": "651fbdca285a60d6c8b7c59b",
                                            "name": "sint"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca37c39c348bccb946",
            "name": "Rhodes",
            "children": [
                {
                    "id": "651fbdca0c36393d3a49f67e",
                    "name": "cillum",
                    "children": [
                        {
                            "id": "651fbdcad4f930c09819a44f",
                            "name": "exercitation",
                            "children": [
                                {
                                    "id": "651fbdca674f348c9ed307c3",
                                    "name": "officia",
                                    "children": [
                                        {
                                            "id": "651fbdcac0e4968f85a6edf0",
                                            "name": "qui"
                                        },
                                        {
                                            "id": "651fbdca78b710da492ba9f5",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdcaa4dd0c5126443137",
                                            "name": "ut"
                                        },
                                        {
                                            "id": "651fbdca381c0ec129a6386b",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdca7d6b428fdfeeb5c4",
                                            "name": "officia"
                                        },
                                        {
                                            "id": "651fbdcad2a992c4f10bfc58",
                                            "name": "sit"
                                        },
                                        {
                                            "id": "651fbdcae173d479e05c377d",
                                            "name": "reprehenderit"
                                        },
                                        {
                                            "id": "651fbdca940312775d7db542",
                                            "name": "laboris"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca79ff1db7c441f1d6",
                                    "name": "laboris",
                                    "children": [
                                        {
                                            "id": "651fbdcac161a68e1d595947",
                                            "name": "excepteur"
                                        },
                                        {
                                            "id": "651fbdca989a5624126f4595",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca79817cf600d4ad00",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdcaf396ba7d5002105c",
                                            "name": "cupidatat"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca5a1ee11fbe76ee48",
                                    "name": "culpa",
                                    "children": [
                                        {
                                            "id": "651fbdca066e794990c747e6",
                                            "name": "cupidatat"
                                        },
                                        {
                                            "id": "651fbdca78f901b14a78f8ca",
                                            "name": "magna"
                                        },
                                        {
                                            "id": "651fbdcadffc7c63b5a0eef3",
                                            "name": "ipsum"
                                        },
                                        {
                                            "id": "651fbdca2035d8ab62216f56",
                                            "name": "duis"
                                        },
                                        {
                                            "id": "651fbdca1339c2c4092beac1",
                                            "name": "irure"
                                        },
                                        {
                                            "id": "651fbdca42ab667568731b4e",
                                            "name": "voluptate"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca8fd94b9df49859fc",
                                    "name": "exercitation",
                                    "children": [
                                        {
                                            "id": "651fbdcad2a4334cd7fd9a31",
                                            "name": "et"
                                        },
                                        {
                                            "id": "651fbdca21474e2cd5e1a944",
                                            "name": "esse"
                                        },
                                        {
                                            "id": "651fbdca1528305256149f9c",
                                            "name": "aliquip"
                                        },
                                        {
                                            "id": "651fbdca3e7e1c0dc4a61f4c",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdca68a11bedc807f12d",
                                            "name": "proident"
                                        },
                                        {
                                            "id": "651fbdca4d7668f5bf6a4367",
                                            "name": "id"
                                        },
                                        {
                                            "id": "651fbdcadf16254e8ee45163",
                                            "name": "minim"
                                        },
                                        {
                                            "id": "651fbdca9ca481a6331bd7c6",
                                            "name": "Lorem"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "id": "651fbdca4bfe294d211a205b",
                            "name": "eu",
                            "children": [
                                {
                                    "id": "651fbdca89c139d19d29f180",
                                    "name": "laboris",
                                    "children": [
                                        {
                                            "id": "651fbdca94a11b07ad92dc87",
                                            "name": "voluptate"
                                        },
                                        {
                                            "id": "651fbdca704a74698fbfe45c",
                                            "name": "occaecat"
                                        },
                                        {
                                            "id": "651fbdcab65874296bd13d33",
                                            "name": "ea"
                                        },
                                        {
                                            "id": "651fbdca59daa85a7541e565",
                                            "name": "sint"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdcacf94447bfee074e1",
                                    "name": "consectetur",
                                    "children": [
                                        {
                                            "id": "651fbdcaf6a9d5dec5e48539",
                                            "name": "anim"
                                        },
                                        {
                                            "id": "651fbdca5d44527652cc9324",
                                            "name": "do"
                                        },
                                        {
                                            "id": "651fbdca2c05520ba13354f9",
                                            "name": "sunt"
                                        },
                                        {
                                            "id": "651fbdca8189b7552f5cea66",
                                            "name": "adipisicing"
                                        },
                                        {
                                            "id": "651fbdca92f89ec67498809e",
                                            "name": "anim"
                                        }
                                    ]
                                },
                                {
                                    "id": "651fbdca6ae9092fcce7a9c4",
                                    "name": "occaecat",
                                    "children": [
                                        {
                                            "id": "651fbdca26929def93734c3e",
                                            "name": "mollit"
                                        },
                                        {
                                            "id": "651fbdcacc7226d45004cc0b",
                                            "name": "velit"
                                        },
                                        {
                                            "id": "651fbdca6c8345ba52d82f9b",
                                            "name": "aute"
                                        },
                                        {
                                            "id": "651fbdcabedb9bf8c83e5cce",
                                            "name": "pariatur"
                                        },
                                        {
                                            "id": "651fbdca4d307992e2e11171",
                                            "name": "nostrud"
                                        },
                                        {
                                            "id": "651fbdca1422d5ace3440036",
                                            "name": "quis"
                                        },
                                        {
                                            "id": "651fbdca5742aec192614d58",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcaf509da4c7b862050",
                                            "name": "esse"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "651fbdca3db13a5a6b79a796",
            "name": "Good",
            "children": [
                {
                    "id": "651fbdca40dfb6e25a7fc959",
                    "name": "veniam",
                    "children": [
                        {
                            "id": "651fbdca56db8ef50a085ba1",
                            "name": "magna",
                            "children": [
                                {
                                    "id": "651fbdcae93848a8297f0d57",
                                    "name": "officia",
                                    "children": [
                                        {
                                            "id": "651fbdcac04f7614df4b6449",
                                            "name": "culpa"
                                        },
                                        {
                                            "id": "651fbdca41cc0ec61e4f5f45",
                                            "name": "commodo"
                                        },
                                        {
                                            "id": "651fbdcad04a125d4149afe5",
                                            "name": "cupidatat"
                                        },
                                        {
                                            "id": "651fbdcadb2e035444f3d69f",
                                            "name": "minim"
                                        },
                                        {
                                            "id": "651fbdcaaecf6e0557832a16",
                                            "name": "cillum"
                                        },
                                        {
                                            "id": "651fbdca990fd9df152e365f",
                                            "name": "consequat"
                                        },
                                        {
                                            "id": "651fbdca5ee8580a0bffe7e5",
                                            "name": "consequat"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
const ExplorerContainer: React.FC = () => {
    const [sizes, setSizes] = useState([100, '30%', 'auto']);

    return (
        <SplitPane sashRender={() => null} sizes={sizes} split={"vertical"} onChange={setSizes}>
            <Pane minSize={250}>
                <ExplorerDirectoriesPane disableSelection={false} data={directories} />
            </Pane>
            <ExplorerContentPane />
        </SplitPane>
    )
}

export default ExplorerContainer;