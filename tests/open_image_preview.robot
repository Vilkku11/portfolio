*** Settings ***
Resource    ../resources/common.resource


*** Variables ***
${IMAGE_SELECTOR}   css:.image-wrapper
${IMAGE_VIEW}   css:.image-view-img

*** Test Cases ***
Button Click Should Show Preview
    [Teardown]  Close Browser After Test
    Open Browser To My App
    Scroll To Element  ${IMAGE_SELECTOR}
    Click Element   ${IMAGE_SELECTOR}
    Element Should be Visible   ${IMAGE_VIEW}
