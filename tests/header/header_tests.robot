*** Settings ***
Resource    ../resources/common.robot
Resource    ../resources/header.robot

Suite Setup    common.Open Browser To My App
Suite Teardown    Close All Browsers

*** Variables ***
${ABOUTME_SECTION_BUTTON}    xpath=//a[@href='#init']
${ABOUTME_FRAGMENT}    id:init

${PROJECTS_SECTION_BUTTON}    xpath=//a[@href='#projects']
${PROJECTS_FRAGMENT}    id:projects

${END_SECTION_BUTTON}    xpath=//a[@href='#end']
${END_FRAGMENT}    id:end

*** Test Cases ***
Clicking About Me Button Should Change Section
    header.Click Header Button    ${ABOUTME_SECTION_BUTTON}
    header.Verify Section Changed    ${ABOUTME_FRAGMENT}

Clicking Projects Button Should Change Section
    header.Click Header Button    ${PROJECTS_SECTION_BUTTON}
    header.Verify Section Changed    ${PROJECTS_FRAGMENT}

Clicking End Button Should Change Section
    header.Click Header Button    ${END_SECTION_BUTTON}
    header.Verify Section Changed    ${END_FRAGMENT}


