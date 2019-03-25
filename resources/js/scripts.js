$('#submitButton').click( function() {
    scanForCheckedBoxes();
});

/**
 *  return (object literal) - returns an object of database columns 
 *           and their values depending on what the client selected
 */
function scanForCheckedBoxes() {
    const json = {
    }
    
    $('input:checked').each(function() {
        const databaseColumn = $(this).prop('name')
        const value = $(this).prop('value')
        
        // check if key for data column exists in json
        if(json[databaseColumn]) {
            json[databaseColumn].push(value);
        } else { // start the array for the key 
            json[databaseColumn] = [value]
        }
    });
    return json;
}