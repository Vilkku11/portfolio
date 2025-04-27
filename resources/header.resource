*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${ABOUTME_SECTION_BUTTON}    xpath=//a[@href='#init']
${ABOUTME_FRAGMENT}    id:init

${PROJECTS_SECTION_BUTTON}    xpath=//a[@href='#projects']
${PROJECTS_FRAGMENT}    id:projects

${END_SECTION_BUTTON}    xpath=//a[@href='#end']
${END_FRAGMENT}    id:end

*** Keywords ***
Click Header Button
    [Arguments]    ${button_locator}
    Click Element   ${button_locator}

Verify Section Changed
    [Arguments]    ${expected_fragment}
    Log    Expected fragment: ${expected_fragment}
    Wait Until Element Is Visible    ${expected_fragment}    timeout=5
    Element Should Be Visible    ${expected_fragment}


