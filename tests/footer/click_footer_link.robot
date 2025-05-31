*** Settings ***
Resource    ../resources/common.robot

Suite Setup    Open Browser To My App
Suite Teardown    Close All Browsers

*** Variables ***
${LINK_BUTTON}    css:.footer-link

*** Test Cases ***
Button Click Should Open New Tab On Projects
    Scroll To Element    ${LINK_BUTTON}
    Click Element    ${LINK_BUTTON}