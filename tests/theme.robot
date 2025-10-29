*** Settings ***
Resource    ./resources/common.robot

Suite Setup    Open Browser To App
Suite Teardown    Close All Browsers

*** Variables ***
${THEME_MENU}    css:.theme-button
${WHITE_THEME_BTN}    xpath=/html/body/div/div/div[2]/div/button[3]
${EXPECTED_COLOR}    rgba(255, 255, 255, 1)


*** Test Cases ***
Open Theme Menu And Change Theme
    Click Theme Button


*** Keywords ***
Click Theme Button
    Click Element    ${THEME_MENU}
    Wait Until Element Is Visible    ${WHITE_THEME_BTN}   
    Select and Verify Theme Change

Select and Verify Theme Change
    Click Element    ${WHITE_THEME_BTN}
    Sleep    0.5s
    ${theme}=    Get Element Attribute    xpath=//html    data-theme
    Should Be Equal    ${theme}    white
    