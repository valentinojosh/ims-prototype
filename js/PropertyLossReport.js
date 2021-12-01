
function submitBtn() {
    let propertyLossReportObj = {};

    propertyLossReportObj = {
        'Name_of_the_Agency': document.getElementById("Agency_Name").value,
        'Todays_Date': document.getElementById("Todays_Date").value,
        'Date_of_Incident': parseInt(document.getElementById("Date_of_Incident").value),
        'Time_Of_Incident': document.getElementById("Time_of_Incident").value,
        'Name_of_the_person_Completing_the_report': document.getElementById("Name_of_person_completing_the_report").value,
        'Title_Of_Person_Completing_the_report': document.getElementById("Title_of_person_completing_report").value,
        'Business_Phone': document.getElementById("Business_phone").value,
        'Business_Email': document.getElementById("Business_email").value,
        'How_did_the_incident_occur_and_what_property_was_damaged': document.getElementById("How_did_the_incident_occur_and_what_property_was_damaged").value,
        'Name_of_location': document.getElementById("NameOfLocation").value,
        'Street_Address_Incident_Location': document.getElementById("StreetAddressIncidentLocation").value,
        'City_Incident_Location': document.getElementById("CityIncidentLocation").value

    }
    alert(propertyLossReportObj.Business_Phone)
    insertPropertyLossReport(propertyLossReportObj);
}

function insertPropertyLossReport(propertyLossReportObj) {
    let URL = "http://127.0.0.1:3000/fvsra/propertyLossReport"
}