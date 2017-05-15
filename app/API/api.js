import {db} from './firebase';

export const getTestCases = () => {
    return db.database().ref('/testCases').once('value').then(function(snapshot) {
        console.log(snapshot.val())
    });
}

export const getHighScores = () => {
    return db.database().ref(`/results/`)
        .once('value')
        .then(results => {
        return results.val();
    })
}

export const saveResult = (result, email) => {
    const key = db.database().ref('/results').push().key;
    return db.database().ref(`/results/${key}`).set({
        result,
        email
    })
}