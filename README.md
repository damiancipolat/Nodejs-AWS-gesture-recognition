# Use Node.js with AWS rekognition to detect gestures in photos.

In this example I show how to create an api rest state-less using nodejs + express with an integration with AWS REKOGNITION.

<img src="https://github.com/damiancipolat/Nodejs-AWS-gesture-recognition/blob/master/resources/meme.jpeg?raw=true" width="180px" align="right" />

### Face Analysis:
I use AWS rekognition api to detect gestures and if the photo is from a human. You can read more info in this links https://docs.aws.amazon.com/es_es/rekognition/latest/dg/what-is.html.

Aws api response example:

```javascript
{
    "FaceDetails": [
        {
            "BoundingBox": {
                "Width": 0.20394515991210938,
                "Height": 0.4204871356487274,
                "Left": 0.1556132435798645,
                "Top": 0.11629478633403778
            },
            "AgeRange": {
                "Low": 17,
                "High": 29
            },
            "Smile": {
                "Value": true,
                "Confidence": 91.7283706665039
            },
            "Eyeglasses": {
                "Value": true,
                "Confidence": 99.88982391357422
            },
            "Sunglasses": {
                "Value": true,
                "Confidence": 92.23440551757812
            },
            "Gender": {
                "Value": "Female",
                "Confidence": 99.97311401367188
            },
            "Beard": {
                "Value": false,
                "Confidence": 99.83840942382812
            },
            "Mustache": {
                "Value": false,
                "Confidence": 99.95821380615234
            },
            "EyesOpen": {
                "Value": true,
                "Confidence": 99.99461364746094
            },
            "MouthOpen": {
                "Value": true,
                "Confidence": 99.51335906982422
            },
            "Emotions": [
                {
                    "Type": "CALM",
                    "Confidence": 0.1430344581604004
                },
                {
                    "Type": "CONFUSED",
                    "Confidence": 0.11641046404838562
                },
                {
                    "Type": "SURPRISED",
                    "Confidence": 0.1008024662733078
                },
                {
                    "Type": "DISGUSTED",
                    "Confidence": 0.018225016072392464
                },
                {
                    "Type": "SAD",
                    "Confidence": 0.003681173315271735
                },
                {
                    "Type": "FEAR",
                    "Confidence": 0.004482289310544729
                },
                {
                    "Type": "HAPPY",
                    "Confidence": 99.58031463623047
                },
                {
                    "Type": "ANGRY",
                    "Confidence": 0.03304917365312576
                }
            ],
            "Landmarks": [
                {
                    "Type": "eyeLeft",
                    "X": 0.23311273753643036,
                    "Y": 0.28700149059295654
                },
                {
                    "Type": "eyeRight",
                    "X": 0.32564252614974976,
                    "Y": 0.27746525406837463
                },
                {
                    "Type": "mouthLeft",
                    "X": 0.24938040971755981,
                    "Y": 0.4339939057826996
                },
                {
                    "Type": "mouthRight",
                    "X": 0.3259195387363434,
                    "Y": 0.42571786046028137
                },
                {
                    "Type": "nose",
                    "X": 0.2994106709957123,
                    "Y": 0.3559057116508484
                },
                {
                    "Type": "leftEyeBrowLeft",
                    "X": 0.1898277848958969,
                    "Y": 0.258786678314209
                },
                {
                    "Type": "leftEyeBrowRight",
                    "X": 0.25588130950927734,
                    "Y": 0.23913364112377167
                },
                {
                    "Type": "leftEyeBrowUp",
                    "X": 0.22465303540229797,
                    "Y": 0.2357855588197708
                },
                {
                    "Type": "rightEyeBrowLeft",
                    "X": 0.3103598654270172,
                    "Y": 0.23413047194480896
                },
                {
                    "Type": "rightEyeBrowRight",
                    "X": 0.3547131419181824,
                    "Y": 0.2416505664587021
                },
                {
                    "Type": "rightEyeBrowUp",
                    "X": 0.3345111012458801,
                    "Y": 0.22470000386238098
                },
                {
                    "Type": "leftEyeLeft",
                    "X": 0.21419213712215424,
                    "Y": 0.28888216614723206
                },
                {
                    "Type": "leftEyeRight",
                    "X": 0.25064346194267273,
                    "Y": 0.2863885760307312
                },
                {
                    "Type": "leftEyeUp",
                    "X": 0.23293153941631317,
                    "Y": 0.2798457145690918
                },
                {
                    "Type": "leftEyeDown",
                    "X": 0.23377712070941925,
                    "Y": 0.2934091091156006
                },
                {
                    "Type": "rightEyeLeft",
                    "X": 0.305652916431427,
                    "Y": 0.28061890602111816
                },
                {
                    "Type": "rightEyeRight",
                    "X": 0.33733639121055603,
                    "Y": 0.27545079588890076
                },
                {
                    "Type": "rightEyeUp",
                    "X": 0.32426485419273376,
                    "Y": 0.2699545621871948
                },
                {
                    "Type": "rightEyeDown",
                    "X": 0.3238048255443573,
                    "Y": 0.28349214792251587
                },
                {
                    "Type": "noseLeft",
                    "X": 0.2737899422645569,
                    "Y": 0.377468079328537
                },
                {
                    "Type": "noseRight",
                    "X": 0.3063475489616394,
                    "Y": 0.3736012876033783
                },
                {
                    "Type": "mouthUp",
                    "X": 0.2932463586330414,
                    "Y": 0.41005250811576843
                },
                {
                    "Type": "mouthDown",
                    "X": 0.29297494888305664,
                    "Y": 0.4546877443790436
                },
                {
                    "Type": "leftPupil",
                    "X": 0.23311273753643036,
                    "Y": 0.28700149059295654
                },
                {
                    "Type": "rightPupil",
                    "X": 0.32564252614974976,
                    "Y": 0.27746525406837463
                },
                {
                    "Type": "upperJawlineLeft",
                    "X": 0.14420086145401,
                    "Y": 0.304552286863327
                },
                {
                    "Type": "midJawlineLeft",
                    "X": 0.17792876064777374,
                    "Y": 0.46004292368888855
                },
                {
                    "Type": "chinBottom",
                    "X": 0.28907808661460876,
                    "Y": 0.5331214666366577
                },
                {
                    "Type": "midJawlineRight",
                    "X": 0.34408921003341675,
                    "Y": 0.44162437319755554
                },
                {
                    "Type": "upperJawlineRight",
                    "X": 0.35112330317497253,
                    "Y": 0.28181537985801697
                }
            ],
            "Pose": {
                "Roll": -3.4967963695526123,
                "Yaw": 4.581802845001221,
                "Pitch": 21.05695152282715
            },
            "Quality": {
                "Brightness": 69.75423431396484,
                "Sharpness": 95.51618957519531
            },
            "Confidence": 99.99998474121094
        }
    ]
}
```

#### Configuration
Go to /config/default.json file and set the configuration values.

- Set server ports.
- Aws credentials.

### Gesture Recognition in photos
Go to ./services/face-expression-functions.js in this filre there are bunch of js functions that using the aws response detect a custom gesture.

In this project there are 3 endpoint to gesture analysis.
- POST / http://127.0.0.1:3000/gestures/eyes-open
- POST / http://127.0.0.1:3000/gestures/eyes-closed
- POST / http://127.0.0.1:3000/gestures/smiling
- POST / http://127.0.0.1:3000/gestures/complete

Send in the body request form-data: the field "picture" as a FILE type.

**POST - complete**

Use this request to detect all the gestures in the same request.

#### Api response
```javascript
{
    "gestures": [
        {
            "name": "likeAface",
            "match": true
        },
        {
            "name": "isSmiling",
            "match": true
        },
        {
            "name": "isHappy",
            "match": true
        }
    ],
    "match": true
}
```

### How to use
Follow this steps.

1) Set configuration values.
2) Run the server with the command **npm start**.
3) Make a post request, import api-gestures.postman_collection to test the api using postman.
4) There are some picture of me :p in ./respurces folder
5) In other console run the webserver cmd /web and run **npm start** and open a browser in http:127.0.0.1:5000
6) Have fun.

#### Commands:
```sh
#In one console run
npm start

#In other console run:
cmd /web
npm start
```

### INTERACTIVE WEB
<img src="https://github.com/damiancipolat/Nodejs-AWS-gesture-recognition/blob/master/resources/meme.jpeg?raw=true" width="180px" align="right" />
