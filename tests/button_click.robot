*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${URL}  http://localhost:5173
${IMAGE_SELECTOR}   .inner-image
${IMAGE_VIEW}   .image-view-img

*** Test Cases ***
Button Click Should Show Preview
    [Teardown]  Close Browser
    SeleniumLibrary.Open Browser    ${URL}
    Maximize Browser Window
    Scroll Element Into view    ${IMAGE_SELECTOR}
    Click Element   ${IMAGE_SELECTOR}
    Element Should be Visible   ${IMAGE_VIEW}

*** Keywords ***
Close Browser
    Run Keyword And Ignore Error    SeleniumLibrary.Close Browser