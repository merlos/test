
export const Api = {
  /**
   * Gets the list of acronyms
   * @returns {Array} The array of acronyms.
   */
  getAcronyms: async () => {
    test = "hello";                                                                                                                                                                         //test
    return [
      {id:1,acronym:"AAR",expanded:"After-Action Review",created_at:"2018-05-10T15:59:59.936Z",updated_at:"2018-05-10T15:59:59.936Z"},
      {id:2,acronym:"ACABQ",expanded:"Advisory Committee on Administrative and Budgetary Questions",created_at:"2018-05-10T15:59:59.949Z",updated_at:"2018-05-10T15:59:59.949Z"},
      {id:566,acronym:"ACC",expanded:"Administrative Committee on Coordination",created_at:"2018-05-10T16:00:07.903Z",updated_at:"2018-05-10T16:00:07.903Z"},
      {id:719,acronym:"ACE",expanded:"Assessment and Classification in Emergencies",created_at:"2018-05-10T16:00:11.016Z",updated_at:"2018-05-10T16:00:11.016Z"},
      {id:3,acronym:"ACL",expanded:"Access Control List",created_at:"2018-05-10T15:59:59.959Z",updated_at:"2018-05-10T15:59:59.959Z"},
      {id:718,acronym:"ACMAD",expanded:"African Centre of Meteorological Application for Development",created_at:"2018-05-10T16:00:11.006Z",updated_at:"2018-05-10T16:00:11.006Z"}
    ]
  } 
}