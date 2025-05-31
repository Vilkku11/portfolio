*** Settings ***
Library    SeleniumLibrary

*** Keywords ***
Click Header Button
    [Arguments]    ${button_locator}
    Click Element   ${button_locator}

Verify Section Changed
    [Arguments]    ${expected_fragment}
    Log    Expected fragment: ${expected_fragment}
    Wait Until Element Is Visible    ${expected_fragment}    timeout=5
    Element Should Be Visible    ${expected_fragment}


