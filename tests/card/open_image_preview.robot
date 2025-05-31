*** Settings ***
Resource    ../resources/common.robot

Suite Setup    Open Browser To My App
Suite Teardown    Close All Browsers

*** Variables ***
${IMAGE_SELECTOR}   css:.image-wrapper
${IMAGE_VIEW}   css:.image-view-img

*** Test Cases ***
Button Click Should Show Preview
    Scroll To Element  ${IMAGE_SELECTOR}
    Click Element   ${IMAGE_SELECTOR}
    Element Should be Visible   ${IMAGE_VIEW}
