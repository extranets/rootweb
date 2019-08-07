import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import {MegaMenu} from "@intra365/navigation-components"
import "@intra365/navigation-components/lib/toolbar.css"
import extranets from "extranets-elsa-web-module/es"
const navigation = {
  "tree": [
    {
      "title": "1-label",
      "key": "1-key",
      "children": [
        {
          "title": "6-label",
          "key": "6-key",
          "children": [
            {
              "title": "11-label",
              "key": "11-key"
            },
            {
              "title": "12-label",
              "key": "12-key"
            },
            {
              "title": "13-label",
              "key": "13-key"
            },
            {
              "title": "14-label",
              "key": "14-key"
            },
            {
              "title": "15-label",
              "key": "15-key"
            }
          ]
        },
        {
          "title": "7-label",
          "key": "7-key",
          "children": [
            {
              "title": "16-label",
              "key": "16-key"
            },
            {
              "title": "17-label",
              "key": "17-key"
            },
            {
              "title": "18-label",
              "key": "18-key"
            },
            {
              "title": "19-label",
              "key": "19-key"
            },
            {
              "title": "20-label",
              "key": "20-key"
            }
          ]
        },
        {
          "title": "8-label",
          "key": "8-key"
        },
        {
          "title": "9-label",
          "key": "9-key"
        },
        {
          "title": "10-label",
          "key": "10-key"
        }
      ]
    },
    {
      "title": "2-label",
      "key": "2-key",
      "children": [
        {
          "title": "21-label",
          "key": "21-key",
          "children": [
            {
              "title": "23-label",
              "key": "23-key"
            },
            {
              "title": "3-label",
              "key": "3-key"
            },
            {
              "title": "26-label",
              "key": "26-key"
            },
            {
              "title": "5-label",
              "key": "5-key",
              "children": []
            },
            {
              "title": "27-label",
              "key": "27-key",
              "children": [
                {
                  "title": "34-label",
                  "key": "34-key"
                }
              ]
            },
            {
              "title": "28-label",
              "key": "28-key"
            },
            {
              "title": "29-label",
              "key": "29-key",
              "children": [
                {
                  "title": "4-label",
                  "key": "4-key",
                  "children": [
                    {
                      "title": "33-label",
                      "key": "33-key"
                    }
                  ]
                },
                {
                  "title": "24-label",
                  "key": "24-key"
                }
              ]
            },
            {
              "title": "30-label",
              "key": "30-key",
              "children": [
                {
                  "title": "31-label",
                  "key": "31-key"
                }
              ]
            },
            {
              "title": "32-label",
              "key": "32-key",
              "children": [
                {
                  "title": "25-label",
                  "key": "25-key",
                  "children": []
                }
              ]
            },
            {
              "title": "35-label",
              "key": "35-key"
            }
          ]
        }
      ]
    },
    {
      "title": "22-label",
      "key": "22-key",
      "children": []
    }
  ],
  "properties": {
    "3-key": {
      "icon": "DocumentSearch",
      "title": "Find Documentation"
    },
    "1-key": {
      "title": "Insights",
      "icon": "PowerBILogo",
      "type": "image",
      "link": "https://powerbi.com",
      "imageSrc": "https://blob.jumpto365.com/images/n/e/t/nets.eu/n/ngjoh@nets.eu/2019/06/extranets.eu.png-20190617-161618.png"
    },
    "2-key": {
      "title": "Project Documents",
      "icon": "Communications",
      "type": "heading"
    },
    "4-key": {
      "title": "Share Documentation",
      "icon": "Share"
    },
    "5-key": {
      "title": "Plan",
      "icon": "PlannerLogo"
    },
    "21-key": {
      "title": "Get Access",
      "icon": "NetworkTower",
      "type": "megamenu"
    },
    "25-key": {
      "title": "Local Navigation",
      "icon": "CollapseMenu"
    },
    "22-key": {
      "title": "Pilot",
      "link": "",
      "icon": "TestBeakerSolid",
      "href": "https://extranets.sharepoint.com/"
    },
    "31-key": {
      "title": "Toolbar Language",
      "icon": "LocaleLanguage"
    },
    "34-key": {
      "icon": "Cake"
    },
    "33-key": {
      "icon": "BusSolid"
    },
    "32-key": {
      "icon": "Cafe"
    },
    "35-key": {
      "icon": "Calculator"
    },
    "30-key": {
      "icon": "BufferTimeAfter"
    },
    "29-key": {
      "icon": "BufferTimeBefore"
    },
    "28-key": {
      "icon": "BufferTimeBoth"
    },
    "26-key": {
      "icon": "BucketColor"
    },
    "27-key": {
      "icon": "Brightness"
    },
    "24-key": {
      "icon": "BranchMerge"
    },
    "23-key": {
      "icon": "BranchPullRequest"
    },
    "10-key": {
      "icon": "AustralianRules"
    },
    "9-key": {
      "icon": "Dropdown",
      "type": "dropdown",
      "title": "Dropdown"
    },
    "8-key": {
      "icon": "PictureTile",
      "type": "tile",
      "title": "Tile",
      "table": "Table Name",
      "tile": "Tile Name"
    },
    "7-key": {
      "icon": "Table",
      "type": "table",
      "title": "Table",
      "table": "Table Name"
    },
    "6-key": {
      "icon": "Link",
      "title": "Link",
      "link": "https://link.to"
    },
    "11-key": {
      "icon": "AddOnlineMeeting"
    },
    "12-key": {
      "icon": "AdminALogo32"
    },
    "13-key": {
      "icon": "AddBookmark"
    },
    "14-key": {
      "icon": "AirTickets"
    },
    "15-key": {
      "icon": "AirplaneSolid"
    }
  }
}
const Footer = class extends React.Component {
  
  componentDidMount() {
    
    extranets.load("netsintranets")
   //extranets.default.load()

    
  }
  
  render() {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
         {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>  */}
        <div className="content has-text-centered has-background-black has-text-white-ter" style={{minHeight:"300px"}}> 
           <div className="container has-background-black has-text-white-ter">
           {/* <MegaMenu  navigation={navigation} /> */}
           
          </div> 
        </div>
        
      </footer>
    )
  }
}

export default Footer
