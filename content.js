
let content = [
    {
        "Flow": "Wing Inspection",
        "Steps": [
            {
                "AnimationType": "Instant",
                "Title": "Choose an item to start",
                // The 3 items represent different scenarios for the connected worker put one of them in the dashed circle to try it
                "Instructions": "",
                "Controls":[
                    {   
                        "Type": "cam",
                        "Text": "Place one of the 3 items in front of the camera to start the experience",
                        "Media": "feed"
                    }
                ],
                "Optional":[
                    {   
                        "Type": "joy",
                        "Text": "Move the joystick <b>up and down</b> to navigate through the apps"
                    }
                ]
            }
        ]
    },
    {
        "Flow": "Wing Inspection",
        "Steps": [
            {
                "AnimationType": "Instant",
                "Title": "Follow the checklist",
                "Instructions": "Go through the checklist by checking each component",
                "Controls":[
                    {   
                        "Type": "joy",
                        "Text": "Hold joystick to the <b>left</b>"
                    },
                    {   
                        "Type": "mic",
                        "Text": "Say <b>“check”</b> into the microphone"
                    },
                    {
                        "Type": "cam",
                        "Text": "<b>“Thumbs up”</b> in front of the camera"
                    }
                ],
                "Optional":[
                    {   
                        "Type": "joy",
                        "Text": "Hold joystick to the <b>left</b>"
                    }
                ]
            },
            {
                "AnimationType": "Wait",
                "Title": "Report a finding",
                "Instructions": "Flag a finding regarding the excessive aileron movement",
                "Controls":[
                    {   
                        "Type": "joy",
                        "Text": "Hold the joystick to the <b>right</b>"
                    },
                    {   
                        "Type": "mic",
                        "Text": "Say <b>“finding”</b> into the microphone"
                    },
                    {
                        "Type": "cam",
                        "Text": "<b>“Thumbs down”</b> in front of the camera"
                    }
                ]
            }
        ]
    }
]