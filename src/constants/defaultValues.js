export const apiURL = "http://localhost:8080/services/gendoc/api/" //Gateway URL.
export const apiAuthURL = "http://localhost:8080/api/authenticate" //Gateway URL.

export const gendocServiceURL = apiURL + "docs/generate"
export const downloadPDFURL = apiURL + 'docs/download/'
export const downloadTemplateURL = apiURL + 'types/download/'

export const createTypeURL = apiURL + "type/create"
export const getAllTypesURL = apiURL + "types"
export const getAllDocsURL = apiURL + "docs"

export const styles = {
    padding: "15px",
}
const currentYear = new Date().getFullYear()

const y = [];
for (var i = currentYear; i >= 1985; i--) {
    y.push(i);
};
export const years = [...y]
export const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
export default {
    CHANGE: "CHANGE",
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
};

export const connected = localStorage.getItem("token") != null;
export const token = "";