*** Settings ***
Resource    ../resources/common.robot

Suite Setup    Open Browser To App
Suite Teardown    Close All Browsers

*** Variables ***
${THEME_MENU}    css:.theme-menu 
${THEME_MENU_BUTTON}    css:.theme-button

&{WHITE_THEME}
    ...    theme_button=xpath=//button[contains(@class, "theme-option") and normalize-space()="White"]
    ...    theme_button_selected=xpath=//button[contains(@class, "theme-option") and contains(@class, "theme-option-active") and normalize-space()="White"]
    ...    theme_color=White

&{GRAY_THEME}
    ...    theme_button=xpath=//button[contains(@class, "theme-option") and normalize-space()="Gray"]
    ...    theme_button_selected=xpath=//button[contains(@class, "theme-option") and contains(@class, "theme-option-active") and normalize-space()="Gray"]
    ...    theme_color=Gray

&{BLACK_THEME}
    ...    theme_button=xpath=//button[contains(@class, "theme-option") and normalize-space()="Black"]
    ...    theme_button_selected=xpath=//button[contains(@class, "theme-option") and contains(@class, "theme-option-active") and normalize-space()="Black"]
    ...    theme_color=Black

*** Test Cases ***
Test Theme Changer
    Open Theme Changer
    Choose And Verify Theme    &{WHITE_THEME}
    Choose And Verify Theme    &{GRAY_THEME}
    Choose And Verify Theme    &{BLACK_THEME}
    Close Theme Changer


*** Keywords ***
Open Theme Changer
    Click Element    ${THEME_MENU_BUTTON}
    Wait Until Element Is Visible    ${THEME_MENU}    timeout=5s

Close Theme Changer
    Click Element    ${THEME_MENU_BUTTON}
    Wait Until Element Is Not Visible    ${THEME_MENU}    timeout=5s

Choose And Verify Theme
    [Arguments]    ${theme_button}    ${theme_button_selected}    ${theme_color}
    Click Element    ${theme_button}
    Wait Until Element Is Visible    ${theme_button_selected}
    Check Theme    ${theme_color}

Check Theme
    [Arguments]    ${expected_theme}
    ${theme}=    Get Element Attribute    xpath=//html    data-theme
    Should Be Equal    ${theme}    ${expected_theme}