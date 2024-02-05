import React, { useState, useEffect } from 'react';
import mongoose from 'mongoose';

// mongoose.connect('mongodb://localhost:27017/projet_react', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
    photo: String,
    nom: String,
    prenom: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

const Profil = () => {
    const [photo, setPhoto] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        User.findOne({ _id: 1 }, (err, user) => {
            if (err) {
                console.error('Erreur lors de la récupération des données :', err);
                return;
            }
            if (user) {
                setPhoto(user.photo);
                setNom(user.nom);
                setPrenom(user.prenom);
                setAge(user.age);
            }
        });
    }, []);

    return (
        <div>
            <img src={photo} alt="ma super photo" />
            <p>Nom: {nom}</p>
            <p>Prénom: {prenom}</p>
            <p>Âge: {age}</p>
        </div>
    );
};

export default Profil;
