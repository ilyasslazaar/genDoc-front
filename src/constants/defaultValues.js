export const apiURL = "http://localhost:8080/services/gendoc/api/" //Gateway URL.
export const gendocServiceURL = apiURL + "docs/generate"
export const downloadFilesURL = apiURL + 'download/file/'
export const styles = {
    padding: "15px",
}
const currentYear = new Date().getFullYear()

const y = [];
for (var i = currentYear; i >= 1985; i--) {
    y.push(i);
};
export const years = [...y];//todo : distyear,formationyear....
export const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']