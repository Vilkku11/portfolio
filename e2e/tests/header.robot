*** Settings ***
Resource    ../resources/common.robot

Suite Setup    common.Open Browser To App
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
    Click Header Button    ${ABOUTME_SECTION_BUTTON}
    Verify Section Changed    ${ABOUTME_FRAGMENT}

Clicking Projects Button Should Change Section
    Click Header Button    ${PROJECTS_SECTION_BUTTON}
    Verify Section Changed    ${PROJECTS_FRAGMENT}

Clicking End Button Should Change Section
    Click Header Button    ${END_SECTION_BUTTON}
    Verify Section Changed    ${END_FRAGMENT}

*** Keywords ***
Click Header Button
    [Arguments]    ${button_locator}
    Click Element   ${button_locator}

Verify Section Changed
    [Arguments]    ${expected_fragment}
    Log    Expected fragment: ${expected_fragment}
    Wait Until Element Is Visible    ${expected_fragment}    timeout=5
    Element Should Be Visible    ${expected_fragment}
