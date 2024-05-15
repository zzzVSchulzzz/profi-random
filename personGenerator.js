const personGenerator = {

    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Валерия",
            "id_2": "Валентина",
            "id_3": "Анастасия",
            "id_4": "Светлана",
            "id_5": "Юлия",
            "id_6": "Даяна",
            "id_7": "Дарина",
            "id_8": "Карина",
            "id_9": "Ирина",
            "id_10": "Ева"
        }
    }`,

    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Электрик",
            "id_2": "Слесарь-сантехник",
            "id_3": "Инженер-металлург",
            "id_4": "Строитель",
            "id_5": "Пилот"
        }
    }`,

    professionFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Адвокат",
            "id_2": "Швея",
            "id_3": "Репетитор по русскому языку и литературе",
            "id_4": "Аудитор",
            "id_5": "Веб-разработчик на PHP И JavaScript"
        }
    }`,

    birthYearJson: `{  
        "count": 7,
        "list": {
            "id_1": "1995",
            "id_2": "1996",
            "id_3": "1997",
            "id_4": "1998",
            "id_5": "1999",
            "id_6": "2000",
            "id_7": "2001"
        }
    }`,

    birthMonthJson: `{  
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    birthDateJson: `{  
        "count": 31,
        "list": {
            "id_1": "1",
            "id_2": "2",
            "id_3": "3",
            "id_4": "4",
            "id_5": "5",
            "id_6": "6",
            "id_7": "7",
            "id_8": "8",
            "id_9": "9",
            "id_10": "10",
            "id_11": "11",
            "id_12": "12",
            "id_13": "13",
            "id_14": "14",
            "id_15": "15",
            "id_16": "16",
            "id_17": "17",
            "id_18": "18",
            "id_19": "19",
            "id_20": "20",
            "id_21": "21",
            "id_22": "22",
            "id_23": "23",
            "id_24": "24",
            "id_25": "25",
            "id_26": "26",
            "id_27": "27",
            "id_28": "28",
            "id_29": "29",
            "id_30": "30",
            "id_31": "31"
        }
    }`,

    GENDER_MALE: '\u2642\uFE0F',
    GENDER_FEMALE: '\u2640\uFE0F',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomVathersName: function(gender) {
        const firstName = this.randomValue(this.firstNameMaleJson);
              lastChar = firstName.slice(-1);
        let vathersName;

        if (firstName === 'Михаил') {
            if (gender === this.GENDER_MALE) {
                vathersName = 'Михайлович';
            } else {
                vathersName = 'Михайловна';
            }
        } else if (gender === this.GENDER_MALE) {
            if (['а', 'я'].includes(lastChar)) {
                vathersName = firstName.slice(0, -1) + 'ич';
            } else if (lastChar === 'й') {
                vathersName = firstName.slice(0, -1) + 'евич';
            } else {
                vathersName = firstName + 'ович';
            }
        } else {
            if (['а', 'я'].includes(lastChar)) {
                vathersName = firstName.slice(0, -1) + 'ична';
            } else if (lastChar === 'й') {
                vathersName = firstName.slice(0, -1) + 'евна';
            } else {
                vathersName = firstName + 'овна';
            }
        }

        return vathersName;
    },

    randomProfession: function(gender) {
        if(gender === this.GENDER_MALE){
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    
    randomBirthDate: function() {
        return this.randomValue(this.birthDateJson);
    },
    
    randomBirthMonth: function() {
        return this.randomValue(this.birthMonthJson);
    },

    randomBirthYear: function() {
        return this.randomValue(this.birthYearJson);
    },

    randomGender: function() {
        return this.randomIntNumber(1) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    getPerson: function () {
        const gender = this.randomGender();
              birthYear = this.randomBirthYear();
              birthMonth = this.randomBirthMonth();
        
        let birthDate = this.randomBirthDate();
        if(birthMonth === 'февраля' && birthDate > 28) {
            birthDate = 28;
        } else if((birthMonth === 'апреля' || birthMonth === 'июня' || birthMonth === 'сентября' || birthMonth === 'ноября') && birthDate > 30) {
            birthDate = 30;
        }

        this.person = {};
        this.person.birthDate = birthDate;
        this.person.birthMonth = birthMonth;
        this.person.birthYear = birthYear;
        this.person.gender = gender;
        if (gender === this.GENDER_MALE) {
            this.person.firstName = this.randomFirstName(this.GENDER_MALE);
            this.person.surname = this.randomSurname(this.GENDER_MALE);
            this.person.vathersName = this.randomVathersName(this.GENDER_MALE);
            this.person.profession = this.randomProfession(this.GENDER_MALE);
        } else {
            this.person.firstName = this.randomFirstName(this.GENDER_FEMALE);
            this.person.surname = this.randomSurname(this.GENDER_FEMALE);
            this.person.vathersName = this.randomVathersName(this.GENDER_FEMALE);
            this.person.profession = this.randomProfession(this.GENDER_FEMALE);
        }
        return this.person;
    },

    clearPerson: function () {
        this.person = {};
        this.person.gender = '';
        this.person.firstName = '';
        this.person.surname = '';
        this.person.vathersName = '';
        this.person.profession = '';
        this.person.birthDate = '';
        this.person.birthMonth = '';
        this.person.birthYear = '';
        return this.person;
    }
};
