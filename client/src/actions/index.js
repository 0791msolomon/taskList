const peopleServices = require("../services/services.people");
export const ALLPEOPLE = "ALLPEOPLE";
export const ADDED_PERSON = "ADDED_PERSON";
export const SEARCH_PEOPLE = "SEARCH_PEOPLE";
export const ACTIVE_PERSON = "ACTIVE_PERSON";

export function getAllPeople() {
  let response = peopleServices.getAll();
  return {
    type: ALLPEOPLE,
    payload: response
  };
}

export function createPerson(data) {
  peopleServices.addPerson(data);
  return {
    type: ADDED_PERSON,
    payload: data
  };
}

export function filterPeople(people) {
  return {
    type: SEARCH_PEOPLE,
    payload: people
  };
}

export function setActivePerson(person) {
  return {
    type: ACTIVE_PERSON,
    payload: person
  };
}
