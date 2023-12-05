export const getCurrentDateTime = () => {

    // Create a new Date object
    const currentDate = new Date();


    // Get individual components of the date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();


    // Format the date and time
    const formattedDate = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;


    // Return the formatted date and time
    return formattedDate;

}