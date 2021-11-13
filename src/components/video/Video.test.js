import React from "react";
import { shallow, mount } from "enzyme";
import { act } from 'react-dom/test-utils';
import moxios from "moxios";
import Video from "./Video";

import {findByTestAttr} from '../../../test/testUtils';

const defaultProps = {
    video: {
        "kind": "youtube#video",
        "etag": "9a41qhXOmSEOm-Y2zAgzaGYfscU",
        "id": "JalYXTCm-pc",
        "snippet": {
            "publishedAt": "2021-11-11T08:30:10Z",
            "channelId": "UCqwUrj10mAEsqezcItqvwEw",
            "title": "Dhindora | EP 05: Erection In Progress | BB Ki Vines",
            "description": "Acha laga? Rate this episode on IMDb: https://www.imdb.com/title/tt15163018/?ref_=tt_eps_rec\n\nWe come to know who caused the accident and drama ensues. The local minister promises to build a statue of Babloo ji in the park. Detective Mangloo shares a crucial piece of evidence which could lead to the true perpetrator.\n\nBhuvan Bam has donned multiple hats for the making of Dhindora - playing 10 characters, writing the story & dialogues, creating the characters & the universe, working hands on on the edit, background music & all the three songs in the series. Dhindora episode drops every Thursday at 2 PM, only on BB Ki Vines.\n\nInstagram► https://www.instagram.com/Bhuvan.Bam22/           \nFacebook► https://www.facebook.com/BBKiVines/\nTwitter►https://twitter.com/Bhuvan_Bam\n\nCheckout Bhuvan Bam's original music: https://streamlink.to/dhindora\nBuy my merchandise from www.youthiapa.com\n\n#Dhindora #ErectionInProgress #BBKiVines #BhuvanBam \n\nA BB Ki Vines Production",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/JalYXTCm-pc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/JalYXTCm-pc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/JalYXTCm-pc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BB Ki Vines",
            "tags": [
                "Dhindora",
                "ep5",
                "bb ki vines",
                "bhuvan bam",
                "titu mama",
                "lottery",
                "indian web show",
                "indian series",
                "web show",
                "funny",
                "humour",
                "comedy",
                "hilarious",
                "hola",
                "sameer",
                "detective",
                "mangloo",
                "dhindora",
                "ep: 04",
                "papa mkc",
                "web series",
                "indian show",
                "series",
                "bhuvan ban",
                "bhuvan",
                "indian web series",
                "dhindora episode 3",
                "bb",
                "bbk ki vines",
                "dhindora episode 2",
                "dhindhora",
                "bb ki vines dhindora",
                "dhindora episode 1",
                "dindora",
                "bb ki vines latest",
                "dhindora bb ki vines",
                "dhindora episode 5"
            ],
            "categoryId": "24",
            "liveBroadcastContent": "none",
            "localized": {
                "title": "Dhindora | EP 05: Erection In Progress | BB Ki Vines",
                "description": "Acha laga? Rate this episode on IMDb: https://www.imdb.com/title/tt15163018/?ref_=tt_eps_rec\n\nWe come to know who caused the accident and drama ensues. The local minister promises to build a statue of Babloo ji in the park. Detective Mangloo shares a crucial piece of evidence which could lead to the true perpetrator.\n\nBhuvan Bam has donned multiple hats for the making of Dhindora - playing 10 characters, writing the story & dialogues, creating the characters & the universe, working hands on on the edit, background music & all the three songs in the series. Dhindora episode drops every Thursday at 2 PM, only on BB Ki Vines.\n\nInstagram► https://www.instagram.com/Bhuvan.Bam22/           \nFacebook► https://www.facebook.com/BBKiVines/\nTwitter►https://twitter.com/Bhuvan_Bam\n\nCheckout Bhuvan Bam's original music: https://streamlink.to/dhindora\nBuy my merchandise from www.youthiapa.com\n\n#Dhindora #ErectionInProgress #BBKiVines #BhuvanBam \n\nA BB Ki Vines Production"
            },
            "defaultAudioLanguage": "hi"
        },
        "contentDetails": {
            "duration": "PT16M49S",
            "dimension": "2d",
            "definition": "hd",
            "caption": "true",
            "licensedContent": true,
            "contentRating": {},
            "projection": "rectangular"
        },
        "statistics": {
            "viewCount": "14921700",
            "likeCount": "2232367",
            "dislikeCount": "9279",
            "favoriteCount": "0",
            "commentCount": "123892"
        }
    }
}

/**
 * @function setup
 * @returns {shallowWrapper}
*/
const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Video {...setupProps} />)
}

const setupMount = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return mount(<Video {...setupProps} />);
}

beforeEach(() => {
    moxios.install();
});

afterEach(() => {
    moxios.uninstall();
})

test('Render component without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-video');
    expect(component.length).toBe(1);
});

test('Thumbnail Image rendered', () => {
    const wrapper = setup();
    const thumbnailImage = findByTestAttr(wrapper, 'video-thumbnail-image');
    expect(thumbnailImage.length).toBe(1);
});

test('Thumbnail Image url is received', () => {
    const wrapper = setup();
    const thumbnailImage = findByTestAttr(wrapper, 'video-thumbnail-image');
    expect(thumbnailImage.props('alt').src.length).not.toBe(0);
});

test('Video title is rendered', () => {
    const wrapper = setup();
    const title = findByTestAttr(wrapper, 'video-title');
    expect(title.text().length).not.toBe(0);
});

test('Video channel title is rendered', () => {
    const wrapper = setup();
    const channelTitle = findByTestAttr(wrapper, 'video-channel-title');
    expect(channelTitle.text().length).not.toBe(0);
});

test('channel info is rendered', () => {
    const videoResponse = {
        "data": {
            "kind": "youtube#videoListResponse",
            "etag": "teiHIAqoFQpD9qhne6Zmfbwv1yM",
            "items": [
                {
                    "kind": "youtube#video",
                    "etag": "FvDu9C0GPFqxOEzs92xaYvf6-Bo",
                    "id": "JalYXTCm-pc",
                    "contentDetails": {
                        "duration": "PT16M49S",
                        "dimension": "2d",
                        "definition": "hd",
                        "caption": "true",
                        "licensedContent": true,
                        "contentRating": {},
                        "projection": "rectangular"
                    },
                    "statistics": {
                        "viewCount": "14991082",
                        "likeCount": "2237709",
                        "dislikeCount": "9356",
                        "favoriteCount": "0",
                        "commentCount": "124058"
                    }
                }
            ],
            "pageInfo": {
                "totalResults": 1,
                "resultsPerPage": 1
            }
        }
    }
    const channelResponse = {
        "data": {
            "kind": "youtube#channelListResponse",
            "etag": "ILzFJSn4SxVp6dHdltg34H4GFAQ",
            "pageInfo": {
                "totalResults": 1,
                "resultsPerPage": 5
            },
            "items": [
                {
                    "kind": "youtube#channel",
                    "etag": "GIiFUc961LGzVwRIH5PciJkXYEQ",
                    "id": "UCqwUrj10mAEsqezcItqvwEw",
                    "snippet": {
                        "title": "BB Ki Vines",
                        "description": "BB Ki Vines is a channel that chronicles the everyday happenings in the lives of BB and his family members.\n\nBhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur. He began his journey in 2012, as a performer at a restaurant in Delhi and then in 2015, began uploading short comedy sketches to his YouTube channel. He also runs his merchandise brand, Youthiapa which was founded in 2017. Bhuvan is amongst the first independent creators to cross 10 million subscribers. He starred in a short film, Plus Minus which earned him a Filmfare award. In 2020, he was named in Forbes’ 30 Under 30 List.\n\nBhuvan is a staunch believer of education equality and has even partnered with Youtube to share the importance of Girl Child Education. He is the only creator to be invited to cover the World Economic Forum in Davos.\n\nThis is the official channel of Bhuvan Bam.\n\nFor business enquiries contact: manage@bbkivines.in\n",
                        "customUrl": "bbkivines",
                        "publishedAt": "2015-06-20T08:40:00Z",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s88-c-k-c0x00ffffff-no-rj",
                                "width": 88,
                                "height": 88
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s240-c-k-c0x00ffffff-no-rj",
                                "width": 240,
                                "height": 240
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/l_ZIXrVEQcHTBTsmpt2CFiWJF9_0hwB3rngr1_lxozZ3Lz58Ij5TcDFOp2TYlioU2gI9RlyExw=s800-c-k-c0x00ffffff-no-rj",
                                "width": 800,
                                "height": 800
                            }
                        },
                        "localized": {
                            "title": "BB Ki Vines",
                            "description": "BB Ki Vines is a channel that chronicles the everyday happenings in the lives of BB and his family members.\n\nBhuvan Bam is an actor, singer-songwriter, comedian and entrepreneur. He began his journey in 2012, as a performer at a restaurant in Delhi and then in 2015, began uploading short comedy sketches to his YouTube channel. He also runs his merchandise brand, Youthiapa which was founded in 2017. Bhuvan is amongst the first independent creators to cross 10 million subscribers. He starred in a short film, Plus Minus which earned him a Filmfare award. In 2020, he was named in Forbes’ 30 Under 30 List.\n\nBhuvan is a staunch believer of education equality and has even partnered with Youtube to share the importance of Girl Child Education. He is the only creator to be invited to cover the World Economic Forum in Davos.\n\nThis is the official channel of Bhuvan Bam.\n\nFor business enquiries contact: manage@bbkivines.in\n"
                        },
                        "country": "IN"
                    }
                }
            ]
        }
    }

    moxios.stubRequest('/videos', {
        status: 200,
        response: videoResponse
    });

    moxios.stubRequest('/channels', {
        status: 200,
        response: channelResponse
    });

    const wrapper = setupMount();
    // console.log(wrapper.debug());
    const channelIcon = findByTestAttr(wrapper, 'video-channel-icon');
    console.log(channelIcon.debug());

});