*** Settings ***
Library     SeleniumLibrary


*** Variables ***
${URL}  http://localhost:5173


*** Keywords ***
Scroll To Element
    [Arguments]     ${element}
    ${web_element}=     Get WebElement      ${element}
    Scroll Element Into View        ${web_element}

Open Browser To My App
    SeleniumLibrary.Open Browser    ${URL}
    Maximize Browser Window

Close Browser After Test
    Run Keyword And Ignore Error    SeleniumLibrary.Close Browser