*** Settings ***
Resource    ../../resources/common.resource
Resource    ../../resources/header.resource

Suite Setup    common.Open Browser To My App
Suite Teardown    Close All Browsers

*** Test Cases ***
Clicking About Me Button Should Change Section
    header.Click Header Button    ${ABOUTME_SECTION_BUTTON}
    header.Verify Section Changed    ${ABOUTME_FRAGMENT}

CLicking Projects Button Should Change Section
    header.Click Header Button    ${PROJECTS_SECTION_BUTTON}
    header.Verify Section Changed    ${PROJECTS_FRAGMENT}

Clicking End Button Should Change Section
    header.Click Header Button    ${END_SECTION_BUTTON}
    header.Verify Section Changed    ${END_FRAGMENT}


