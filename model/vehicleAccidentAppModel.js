'use strict';
var sql = require('./db.js');
//Task object constructor
var VehicleAccident = function (vehicleAccident) {
    this.Name_of_the_Agency = vehicleAccident.Name_of_the_Agency;
    this.Todays_Date = vehicleAccident.Todays_Date;
    this.Date_of_Incident= vehicleAccident.Date_of_Incident;
    this.Name_of_the_person_Completing_the_report = vehicleAccident.Name_of_the_person_Completing_the_report;
    this.Business_Phone = vehicleAccident.Business_Phone;
    this.Business_Email = vehicleAccident.Business_Email;
    this.How_did_the_incident_Occur = vehicleAccident.How_did_the_incident_Occur;
    this.Name_of_the_location = vehicleAccident.Name_of_the_location;
    this.Is_there_an_address_for_incident_Location = vehicleAccident.Is_there_an_address_for_incident_Location;
    this.Incident_Street_Address = vehicleAccident.Incident_Street_Address;
    this.IncidentCity = vehicleAccident.IncidentCity;
    this.IncidentState = vehicleAccident.IncidentState;
    this.IncidentZipCode = vehicleAccident.IncidentZipCode;
    this.IncidentLocation = vehicleAccident.IncidentLocation;
    this.PrimaryLocation = vehicleAccident.PrimaryLocation;
    this.Was_the_agency_vehicle_Occupied = vehicleAccident.Was_the_agency_vehicle_Occupied;
    this.AgencyDriverLastName = vehicleAccident.AgencyDriverLastName;
    this.AgencyDriverFirstName = vehicleAccident.AgencyDriverFirstName;
    this.AgencyDriverAddress = vehicleAccident.AgencyDriverAddress;
    this.AgencyDriverCity = vehicleAccident.AgencyDriverCity;
    this.AgencyDriverState = vehicleAccident.AgencyDriverState;
    this.AgencyDriverZipCode = vehicleAccident.AgencyDriverZipCode;
    this.AgencyDriverHomePhoneNumber = vehicleAccident.AgencyDriverHomePhoneNumber;
    this.AgencyDriverWorkPhoneNumber = vehicleAccident.AgencyDriverWorkPhoneNumber;
    this.Agency_driver_Cell_phone = vehicleAccident.Agency_driver_Cell_phone;
    this.Agency_driver_Email_Address = vehicleAccident.Agency_driver_Email_Address;
    this.is_this_driver_an_employee = vehicleAccident.is_this_driver_an_employee;
    this.if_yes_enter_job_title = vehicleAccident.if_yes_enter_job_title;
    this.Identify_type_of_driver = vehicleAccident.Identify_type_of_driver;
    this.Agency_vehicle_VIN = vehicleAccident.Agency_vehicle_VIN;
    this.Agency_vehicle_Make = vehicleAccident.Agency_vehicle_Make;
    this.Agency_vehicle_Model = vehicleAccident.Agency_vehicle_Model;
    this.Agency_vehicle_License_Number = vehicleAccident.Agency_vehicle_License_Number;
    this.Is_this_vehicle_drivable = vehicleAccident.Is_this_vehicle_drivable;
    this.If_no_provide_current_location_of_vehicle = vehicleAccident.If_no_provide_current_location_of_vehicle;
    this.Area_of_damage = vehicleAccident.Area_of_damage;
    this.Estimated_repair_cost = vehicleAccident.Estimated_repair_cost;
    this.was_a_trailer_involved = vehicleAccident.was_a_trailer_involved;
    this.Trailer_year = vehicleAccident.Trailer_year;
    this.Trailer_Make = vehicleAccident.Trailer_Make;
    this.Trailer_Model = vehicleAccident.Trailer_Model;
    this.Trailer_license_Number = vehicleAccident.Trailer_license_Number;
    this.Trailer_area_of_damage = vehicleAccident.Trailer_area_of_damage;
    this.Current_Location_of_trailer = vehicleAccident.Current_Location_of_trailer;
    this.Estimated_repair_cost_of_trailer = vehicleAccident.Estimated_repair_cost_of_trailer;
    this.Has_a_police_agency_conducted_an_investigation = vehicleAccident.Has_a_police_agency_conducted_an_investigation;
    this.What_police_agency_investigated_the_incident = vehicleAccident.What_police_agency_investigated_the_incident;
    this.Police_report_number = vehicleAccident.Police_report_number;
    this.Was_the_agency_driver_ticketed_arrested_or_cited_for_violation = vehicleAccident.Was_the_agency_driver_ticketed_arrested_or_cited_for_violation;
    this.If_yes_provide_details_of_the_ticket_arrest_or_violation = vehicleAccident.If_yes_provide_details_of_the_ticket_arrest_or_violation;
    this.Identify_other_people_involved_in_the_accident = vehicleAccident.Identify_other_people_involved_in_the_accident;
    this.How_was_the_person_involved_in_the_accident = vehicleAccident.How_was_the_person_involved_in_the_accident;
    this.Last_Name_Or_BusinessName = vehicleAccident.Last_Name_Or_BusinessName;
    this.First_name_not_necessary_for_business = vehicleAccident.First_name_not_necessary_for_business;
    this.Address = vehicleAccident.Address;
    this.City = vehicleAccident.City;
    this.state = vehicleAccident.state;
    this.zip_code = vehicleAccident.zip_code;
    this.Home_phone_number = vehicleAccident.Home_phone_number;
    this.work_phone_number = vehicleAccident.work_phone_number;
    this.Cell_phone_number = vehicleAccident.Cell_phone_number;
    this.vehicle_make = vehicleAccident.vehicle_make;
    this.Model = vehicleAccident.Model;
    this.vehicle_year = vehicleAccident.vehicle_year;
    this.Area_of_damage_form_three = vehicleAccident.Area_of_damage_form_three;
    this.is_vehicle_drivable = vehicleAccident.is_vehicle_drivable;
    this.If_no_current_location_of_vehicle = vehicleAccident.If_no_current_location_of_vehicle;
    this.Extent_of_damage = vehicleAccident.Extent_of_damage;
    this.Describe_the_property_damage_other_than_vehicle = vehicleAccident.Describe_the_property_damage_other_than_vehicle; //Line 70
    this.Extent_of_damage_to_property_other_than_vehicle = vehicleAccident.Extent_of_damage_to_property_other_than_vehicle;
    this.Age_of_injured_person = vehicleAccident.Age_of_injured_person;
    this.Sex_of_injured_person = vehicleAccident.Sex_of_injured_person;
    this.Was_the_injured_person_transported_by_paramedics = vehicleAccident.Was_the_injured_person_transported_by_paramedics;
    this.If_yes_where_was_the_injured_person_taken = vehicleAccident.If_yes_where_was_the_injured_person_taken;
    this.Do_you_expect_the_injured_person_to_file_a_claim = vehicleAccident.Do_you_expect_the_injured_person_to_file_a_claim;
    this.Describe_the_injury = vehicleAccident.Describe_the_injury;
    this.Identify_other_people_involved_in_the_accident2 = vehicleAccident.Identify_other_people_involved_in_the_accident2;
    this.How_was_the_person_involved_in_the_accident2 = vehicleAccident.How_was_the_person_involved_in_the_accident2;
    this.Last_name_or_business_name = vehicleAccident.Last_name_or_business_name;
    this.First_name_not_necessary_for_business_form_three = vehicleAccident.First_name_not_necessary_for_business_form_three;
    this.Address_form_3 = vehicleAccident.Address_form_3;
    this.city_form_3 = vehicleAccident.city_form_3;
    this.state_form_3 = vehicleAccident.state_form_3;
    this.zip_code_form_3 = vehicleAccident.zip_code_form_3;
    this.Home_phone_number_form_3 = vehicleAccident.Home_phone_number_form_3;
    this.cell_phone_number_form_3 = vehicleAccident.cell_phone_number_form_3;
    this.work_phone_number_form_3 = vehicleAccident.work_phone_number_form_3;
    this.vehicle_make_form_3 = vehicleAccident.vehicle_make_form_3;
    this.vehicle_model_form_3 = vehicleAccident.vehicle_model_form_3;
    this.vehicle_year_form_3 = vehicleAccident.vehicle_year_form_3;
    this.Area_of_damage_form_3 = vehicleAccident.Area_of_damage_form_3;
    this.Is_vehicle_driveable_form_3 = vehicleAccident.Is_vehicle_driveable_form_3;
    this.If_no_current_location_of_vehicle_form_3 = vehicleAccident.If_no_current_location_of_vehicle_form_3;
    this.Extent_of_damage_form_3 = vehicleAccident.Extent_of_damage_form_3;
    this.Describe_the_property_damage_other_than_vehicle_form_3 = vehicleAccident.Describe_the_property_damage_other_than_vehicle_form_3;
    this.Extent_of_damage_to_property_other_than_vehicle_form_3 = vehicleAccident.Extent_of_damage_to_property_other_than_vehicle_form_3;
    this.Age_of_injured_person_form_4 = vehicleAccident.Age_of_injured_person_form_4;
    this.Sex_of_injured_person_form_3 = vehicleAccident.Sex_of_injured_person_form_3;
    this.Was_the_injured_person_transported_by_paramedics_form_4 = vehicleAccident.Was_the_injured_person_transported_by_paramedics_form_4;
    this.If_yes_where_was_the_injured_person_taken_form_4 = vehicleAccident.If_yes_where_was_the_injured_person_taken_form_4;
    this.Do_you_expect_the_injured_person_to_file_a_claim_form_4 = vehicleAccident.Do_you_expect_the_injured_person_to_file_a_claim_form_4;
    this.Describe_the_injury_form_4 = vehicleAccident.Describe_the_injury_form_4;
    this.Identify_witnesses_of_the_accident = vehicleAccident.Identify_witnesses_of_the_accident;
    this.Last_name_form_4 = vehicleAccident.Last_name_form_4;
    this.first_name_form_4 = vehicleAccident.first_name_form_4;
    this.Address_form_4 = vehicleAccident.Address_form_4;
    this.city_form_4 = vehicleAccident.city_form_4;
    this.state_form_4 = vehicleAccident.state_form_4;
    this.Zip_code_form_4 = vehicleAccident.Zip_code_form_4;
    this.Home_phone_number_form_4 = vehicleAccident.Home_phone_number_form_4;
    this.work_phone_number_form_4 = vehicleAccident.work_phone_number_form_4;
    this.cell_phone_number_form_4 = vehicleAccident.cell_phone_number_form_4;
    this.Witness_to_accident = vehicleAccident.Witness_to_accident;
    this.If_yes_provide_the_following_information_form_4 = vehicleAccident.If_yes_provide_the_following_information_form_4;
    this.Relation_to_injured_person_or_property_owner = vehicleAccident.Relation_to_injured_person_or_property_owner;
    this.Did_witness_make_any_statements = vehicleAccident.Did_witness_make_any_statements;
    this.If_yes_what_did_witness_said = vehicleAccident.If_yes_what_did_witness_said;
    this.Where_was_witness_when_the_accident_occurred = vehicleAccident.Where_was_witness_when_the_accident_occurred;
    this.Was_the_driver_of_the_agency_vehicle_conducting_agency_business = vehicleAccident.Was_the_driver_of_the_agency_vehicle_conducting_agency_business;
    this.What_street_was_the_agency_driver_on_form_4 = vehicleAccident.What_street_was_the_agency_driver_on_form_4;
    this.What_street_was_the_other_driver_driving_on = vehicleAccident.What_street_was_the_other_driver_driving_on;
    this.What_direction_was_the_agency_driver_traveling = vehicleAccident.What_direction_was_the_agency_driver_traveling;
    this.What_direction_was_the_other_driver_traveling = vehicleAccident.What_direction_was_the_other_driver_traveling;
    this.Weather_condition = vehicleAccident.Weather_condition;
};
VehicleAccident.getVehicleAccidentByID = function (vehicle_accident_id, result) {
    sql.query("Select * from Vehicle_Accident_Report WHERE vehicle_accident_id = ? ", vehicle_accident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
VehicleAccident.getAllVehicleAccidents = function (result) {
    sql.query("Select * from Vehicle_Accident_Report", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('Lost Items : ', res);
            result(null, res);
        }
    });
};
VehicleAccident.createVehicleAccident = function (newAccident, result) {
    sql.query("INSERT INTO Vehicle_Accident_Report set ?", newAccident, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
VehicleAccident.remove = function (vehicle_accident_id, result) {
    sql.query("DELETE FROM Vehicle_Accident_Report WHERE vehicle_accident_id = ?", vehicle_accident_id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = VehicleAccident;