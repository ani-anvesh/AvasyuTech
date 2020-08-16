import React, { useState, useEffect } from "react";
import base from "../../config/FbConfig";
import "./questions.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import ResultM1 from "./ResultM1";

export default function Questbox(props) {
  /* const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]); */
  const collection = props.location.state;
  const orange = "orange";
  const green = "green";
  const scoreRed1 = localStorage.getItem("scorered1");
  const scoreOrange1 = localStorage.getItem("scoreorange1");
  const scoreGreen1 = localStorage.getItem("scoregreen1");
  const scoreRedOrange = parseInt(scoreRed1) + parseInt(scoreOrange1);
  // console.log(scoreRedOrange);
  /* useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("QuestionTypes")
      .doc(collection[0])
      .collection("Questions")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("QuestionTypes")
      .doc(collection[1])
      .collection("Questions")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData1(newData);
      });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("QuestionTypes")
      .doc(collection[2])
      .collection("Questions")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData2(newData);
      });
    return () => unsubscribe();
  }, []);
  console.log(); */
  const data1 = [
    {
      question: "A pointer variable can be",
      options: [
        "Changed within function",
        "Assigned an integer value.",
        "None of these",
        "Passed to a function as argument.",
      ],
      answer: "Passed to a function as argument.",
    },
    {
      question: "Which of the following uses structure?",
      options: [
        "Linked Lists",
        "Array of structures",
        "All of these",
        "Binary Tree",
      ],
      answer: "All of these",
    },
    {
      question:
        "Strings are character arrays. The last index of it contains the null-terminated character",
      options: ["|t", "|1", "|0", "|n"],
      answer: "|0",
    },
    {
      question:
        "Which of the following is a collection of different data types?",
      options: ["String", "Structure", "Array", "Files"],
      answer: "Structure",
    },
    {
      question:
        "What function should be used to free the memory allocated by calloc() ?",
      options: [
        "free()",
        "malloc(variable_name, 0)",
        "dealloc()",
        "memalloc(variable_name, 0)",
      ],
      answer: "free()",
    },
    {
      question:
        "In the standard library of C programming language, which of the following header file is designed for basic mathematical operations?",
      options: ["conio.h", "stdio.h", "math.h", "Doc.h"],
      answer: "math.h",
    },
    {
      question: "int**ptr; is",
      options: [
        "Pointer to integer",
        "None of these",
        "Pointer to Pointer",
        "Invalid declaration",
      ],
      answer: "Pointer to Pointer",
    },
    {
      question:
        "Which of the following special symbol allowed in a variable name?",
      options: ["_(underscore)", "-(hyphen)", "| (pipeline)", "* (asterisk)"],
      answer: "_(underscore)",
    },
    {
      question: "All keywords in C are in",
      options: [
        "Uppercase  letters",
        "None of these",
        "Lowercase letters",
        "Camel Case letters",
      ],
      answer: "Lowercase letters",
    },
    {
      question:
        "#include <stdio.h> #include <string.h> #include <stdlib.h> void myfunc(char,param){++param;} int main(){char string = (char )malloc(64); strcpy(string, 'hello_World');myfunc(&string); myfunc(&string);prinf('%s|n',string) // ignore memory leak for sake of quiz return 0;}",
      options: ["hello_World", "ello_World", "lo_World", "llo_World"],
      answer: "hello_World",
    },
    {
      question:
        "What is the output of this C code? #include <stdio.h>void main(){int k = 5; int p = &k;int	m = &p; printf('%d%d%d|n', k, p,p);}",
      options: ["5 5 5", "5 5 junk", "5 junk junk", "compile time error"],
      answer: "compile time error",
    },
    {
      question:
        "Which of the following statements about stdout and stderr are true?",
      options: [
        "They both are the same",
        "Run time errors are automatically displayed in stderr",
        "Both are connected to the screen by default",
        "stdout is line buffered but stderr is unbuffered.",
      ],
      answer: "stdout is line buffered but stderr is unbuffered.",
    },
    {
      question:
        "Given the below statements about C programming language: 1) main() function should always be the first function present in a C program file. 2)	all the elements of an union share their memory location. 3) A void pointer can hold address of any type and can be typcasted to any type 4)	A static variable hold random junk value if it is not initialised",
      options: ["2,3", "1,2", "1,2,3", "1,2,3,4"],
      answer: "2,3",
    },
    {
      question: "If a function is defined as static, it means?",
      options: [
        "The value returned by the function does not change",
        "all the variable declared inside the function automatically will be assigned initial value of zero",
        "It should be called only within the same source code / program file",
        "None of the other choices as it is wrong to add static prefix to a function",
      ],
      answer:
        "It should be called only within the same source code / program file",
    },
    {
      question:
        "What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?",
      options: [
        "The element will be set to 0.",
        "The compiler would report an error.",
        "The program may crash if some important data gets overwritten.",
        "The array size would appropriately grow",
      ],
      answer: "The program may crash if some important data gets overwritten",
    },
    {
      question: "What does the following declaration mean? int ( ptr)[10];",
      options: [
        "ptr is array of pointers to 10 integers",
        "ptr is a pointer to an array of 10 integers",
        "ptr is an array of 10 integers",
        "ptr is an pointer to array",
      ],
      answer: "ptr is a pointer to an array of 10 integers",
    },
    {
      question:
        "In C, if you pass an array as an argument to a function, what actually gets passed",
      options: [
        "Value of elements in array",
        "First element of the array ",
        "Base address of the array",
        "Address of the last element of array ",
      ],
      answer: "Base address of the array",
    },
    {
      question:
        "What will be the output of the program ? #include<stdio.h> intmain(){int a[5] = {5, 1, 15, 20, 25};int i, j, m;i = ++a[1];j = a[1]++;m = a[i++];printf('%d, %d, %d', i, j, m); return 0;}",
      options: ["2, 1, 15", "1, 2, 5", "3, 2, 15", "2, 3, 20"],
      answer: "3, 2, 15",
    },
    {
      question:
        "Is there any difference int the following declarations? int fun(int arr[]);int fun(int arr[2]); ",
      options: ["Yes", "No", "N/A", "N/A"],
      answer: "No",
    },
    {
      question:
        "Are the expressions arr and &arr same for an array of 10 integers?",
      options: ["Yes", "No", "N/A", "N/A"],
      answer: "No",
    },
    {
      question:
        "Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1?",
      options: [
        "rem = 3.14 % 2.1",
        "rem = modf(3.14, 2.1)",
        "rem = fmod(3.14, 2.1",
        "Remainder cannot be obtain in floating point division",
      ],
      answer: "rem = fmod(3.14, 2.1)",
    },
    {
      question: "What are the types of pakages?",
      options: [
        "Internal and External",
        "External, Internal and None",
        "External and None",
        "Internal",
      ],
      answer: "External, Internal and None",
    },
    {
      question:
        "Which of the fplowing special symbp allowed in a variable name?",
      options: ["*(asterisk)", "|(Pipeline)", "-(hyphen)", "_(underscore)"],
      answer: "_(underscore)",
    },
    {
      question:
        "Is there any difference between fplowing declarations? extern :int fun() :int fun()",
      options: [
        "Both are different",
        "No difference, except extern int fun(); is probably in another file",
        "int fun(); is overrided with extern int fun();",
        "None of these",
      ],
      answer:
        "No difference, except extern int fun(); is probably in another file",
    },
    {
      question: "How would you round off a value from 1.66 to 2.0?",
      options: [
        "ceil (1.66)",
        "floor (1.66)",
        "roundup (1.66)",
        "Round to (1.66)",
      ],
      answer: "ceil (1.66)",
    },
    {
      question:
        "A long double can be used if range of a double is not enough to accommodate a real number.",
      options: ["True", "False", "N/A", "N/A"],
      answer: "False",
    },
  ];
  const data2 = [
    {
      question: "A pointer variable can be",
      options: [
        "Changed within function",
        "Assigned an integer value.",
        "None of these",
        "Passed to a function as argument.",
      ],
      answer: "Passed to a function as argument.",
    },
    {
      question: "Which of the following uses structure?",
      options: [
        "Linked Lists",
        "Array of structures",
        "All of these",
        "Binary Tree",
      ],
      answer: "All of these",
    },
    {
      question:
        "Strings are character arrays. The last index of it contains the null-terminated character",
      options: ["|t", "|1", "|0", "|n"],
      answer: "|0",
    },
    {
      question:
        "Which of the following is a collection of different data types?",
      options: ["String", "Structure", "Array", "Files"],
      answer: "Structure",
    },
    {
      question:
        "What function should be used to free the memory allocated by calloc() ?",
      options: [
        "free()",
        "malloc(variable_name, 0)",
        "dealloc()",
        "memalloc(variable_name, 0)",
      ],
      answer: "free()",
    },
    {
      question:
        "In the standard library of C programming language, which of the following header file is designed for basic mathematical operations?",
      options: ["conio.h", "stdio.h", "math.h", "Doc.h"],
      answer: "math.h",
    },
    {
      question: "int**ptr; is",
      options: [
        "Pointer to integer",
        "None of these",
        "Pointer to Pointer",
        "Invalid declaration",
      ],
      answer: "Pointer to Pointer",
    },
    {
      question:
        "Which of the following special symbol allowed in a variable name?",
      options: ["_(underscore)", "-(hyphen)", "| (pipeline)", "* (asterisk)"],
      answer: "_(underscore)",
    },
    {
      question: "All keywords in C are in",
      options: [
        "Uppercase  letters",
        "None of these",
        "Lowercase letters",
        "Camel Case letters",
      ],
      answer: "Lowercase letters",
    },
    {
      question:
        "#include <stdio.h> #include <string.h> #include <stdlib.h> void myfunc(char,param){++param;} int main(){char string = (char )malloc(64); strcpy(string, 'hello_World');myfunc(&string); myfunc(&string);prinf('%s|n',string) // ignore memory leak for sake of quiz return 0;}",
      options: ["hello_World", "ello_World", "lo_World", "llo_World"],
      answer: "hello_World",
    },
    {
      question:
        "What is the output of this C code? #include <stdio.h>void main(){int k = 5; int p = &k;int	m = &p; printf('%d%d%d|n', k, p,p);}",
      options: ["5 5 5", "5 5 junk", "5 junk junk", "compile time error"],
      answer: "compile time error",
    },
    {
      question:
        "Which of the following statements about stdout and stderr are true?",
      options: [
        "They both are the same",
        "Run time errors are automatically displayed in stderr",
        "Both are connected to the screen by default",
        "stdout is line buffered but stderr is unbuffered.",
      ],
      answer: "stdout is line buffered but stderr is unbuffered.",
    },
    {
      question:
        "Given the below statements about C programming language: 1) main() function should always be the first function present in a C program file. 2)	all the elements of an union share their memory location. 3) A void pointer can hold address of any type and can be typcasted to any type 4)	A static variable hold random junk value if it is not initialised",
      options: ["2,3", "1,2", "1,2,3", "1,2,3,4"],
      answer: "2,3",
    },
    {
      question: "If a function is defined as static, it means?",
      options: [
        "The value returned by the function does not change",
        "all the variable declared inside the function automatically will be assigned initial value of zero",
        "It should be called only within the same source code / program file",
        "None of the other choices as it is wrong to add static prefix to a function",
      ],
      answer:
        "It should be called only within the same source code / program file",
    },
    {
      question:
        "What will happen if in a C program you assign a value to an array element whose subscript exceeds the size of array?",
      options: [
        "The element will be set to 0.",
        "The compiler would report an error.",
        "The program may crash if some important data gets overwritten.",
        "The array size would appropriately grow",
      ],
      answer: "The program may crash if some important data gets overwritten",
    },
    {
      question: "What does the following declaration mean? int ( ptr)[10];",
      options: [
        "ptr is array of pointers to 10 integers",
        "ptr is a pointer to an array of 10 integers",
        "ptr is an array of 10 integers",
        "ptr is an pointer to array",
      ],
      answer: "ptr is a pointer to an array of 10 integers",
    },
    {
      question:
        "In C, if you pass an array as an argument to a function, what actually gets passed",
      options: [
        "Value of elements in array",
        "First element of the array ",
        "Base address of the array",
        "Address of the last element of array ",
      ],
      answer: "Base address of the array",
    },
    {
      question:
        "What will be the output of the program ? #include<stdio.h> intmain(){int a[5] = {5, 1, 15, 20, 25};int i, j, m;i = ++a[1];j = a[1]++;m = a[i++];printf('%d, %d, %d', i, j, m); return 0;}",
      options: ["2, 1, 15", "1, 2, 5", "3, 2, 15", "2, 3, 20"],
      answer: "3, 2, 15",
    },
    {
      question:
        "Is there any difference int the following declarations? int fun(int arr[]);int fun(int arr[2]); ",
      options: ["Yes", "No", "N/A", "N/A"],
      answer: "No",
    },
    {
      question:
        "Are the expressions arr and &arr same for an array of 10 integers?",
      options: ["Yes", "No", "N/A", "N/A"],
      answer: "No",
    },
    {
      question:
        "Which of the following statements should be used to obtain a remainder after dividing 3.14 by 2.1?",
      options: [
        "rem = 3.14 % 2.1",
        "rem = modf(3.14, 2.1)",
        "rem = fmod(3.14, 2.1",
        "Remainder cannot be obtain in floating point division",
      ],
      answer: "rem = fmod(3.14, 2.1)",
    },
    {
      question: "What are the types of pakages?",
      options: [
        "Internal and External",
        "External, Internal and None",
        "External and None",
        "Internal",
      ],
      answer: "External, Internal and None",
    },
    {
      question:
        "Which of the fplowing special symbp allowed in a variable name?",
      options: ["*(asterisk)", "|(Pipeline)", "-(hyphen)", "_(underscore)"],
      answer: "_(underscore)",
    },
    {
      question:
        "Is there any difference between fplowing declarations? extern :int fun() :int fun()",
      options: [
        "Both are different",
        "No difference, except extern int fun(); is probably in another file",
        "int fun(); is overrided with extern int fun();",
        "None of these",
      ],
      answer:
        "No difference, except extern int fun(); is probably in another file",
    },
    {
      question: "How would you round off a value from 1.66 to 2.0?",
      options: [
        "ceil (1.66)",
        "floor (1.66)",
        "roundup (1.66)",
        "Round to (1.66)",
      ],
      answer: "ceil (1.66)",
    },
    {
      question:
        "A long double can be used if range of a double is not enough to accommodate a real number.",
      options: ["True", "False", "N/A", "N/A"],
      answer: "False",
    },
  ];
  const data = [
    {
      question: "Spot out dissimilar one",
      options: ["Eye", "Tongue", "Nose", "Finger"],
      answer: "Finger",
    },
    {
      question:
        "'If Cinto Baoli tsi nzro' means 'her village is Sarurpur' 'mhi cinto keepi tsi oind' means 'her first love is literature' and 'oind geit tsi cinto pki' means 'literature collection is her hobby'.Which word 'literature' would mean",
      options: ["Cinto", "Baoli", "Oind", "GEIT	E. MHI"],
      answer: "Oind",
    },
    {
      question:
        "If in a certain language DIVISION is written as DVISIOIN, how is STATES is written in that language",
      options: ["SATETS", "STATES", "SATTES", "SAE"],
      answer: "SATETS",
    },
    {
      question: "If TOM=48 and DICK=27, what is HARRY=?",
      options: ["50", "80", "70", "60"],
      answer: "70",
    },
    {
      question: "If CUPBOARD is coded as CXPBXXRD, how will CRAFT be",
      options: ["CRAXT", "CRAFX", "CXART", "CRXFT"],
      answer: "CRXFT",
    },
    {
      question:
        "Shiva was born on 3rd March 1980. Anvesh was born 4 days before Shiva. The republic day of that year fell on saturday which day was Anvesh birthday",
      options: ["WEDNESDAY", "FRIDAY", "THURSDAY", "TUESDAY"],
      answer: "THURSDAY",
    },
    {
      question: "How many times from 4pm to 10pm the hands are at right angle",
      options: ["9", "11", "10", "6"],
      answer: "11",
    },
    {
      question: "At what time the hands of the clock together between 6 and 7",
      options: [
        "32.8/11min.past6",
        "34.8/11min.past6",
        "30.8/11min.past6",
        "32.5/7min.past6",
      ],
      answer: "32.8/11min.past6",
    },
    {
      question: "Pupil : class : : Bead : ",
      options: ["Necklace", "Ornament", "Jwellery", "Gold"],
      answer: "Ornament",
    },
    {
      question:
        "If(i) A*B means A is the brother of B (ii) A•B means A is the daughter of B (iii) A∆B means A is the sister of B which one of the following showa the relation that P is the maternal uncle of Q",
      options: ["P∆R*Q", "P*R•Q", "Q•R∆P", "Q•R*P"],
      answer: "Q•R∆P",
    },
    {
      question:
        "If B's mother was A's mother's daughter, how was A related to B",
      options: ["Father", "Sister", "Brother", "Maternal Uncle"],
      answer: "Maternal Uncle",
    },
    {
      question:
        "In a certain code 'STABILISE' is written as 'UVCDKNUG'  how would cricket be written in that code",
      options: ["ETKFMVG", "ESLEMGV", "ETKATCR", "ETKEMGV"],
      answer: "ETKEMGV",
    },
    {
      question:
        "If in a certain language A is written as 2, B as 4 and C as 6, then in the same language what do the figures 1210108 stand for",
      options: ["DEEP", "DOOR", "DEER", "FEED"],
      answer: "FEED",
    },
    {
      question: "Spot out dissimilar one",
      options: ["Tree", "Root", "Flower", "Leaf"],
      answer: "Tree",
    },
    {
      question:
        "My brother is 562 days older to me while my sister is 75 weeks older to him. If my sister was born on Tuesday, On which day was I born",
      options: ["SUNDAY", "MONDAY", "THURSDAY", "TUESDAY"],
      answer: "THURSDAY",
    },
    {
      question: "(i) All teachers are fathers (ii) All boys are teachers",
      options: [
        "All boys are fathers",
        "Some teachers are boys",
        "No boy is a father",
        "Some fathers are boys",
      ],
      answer: "All boys are fathers",
    },
    {
      question: "(i) Some people are wise (ii) Some people are rich",
      options: [
        "All the people are not wise but rich",
        "Some wise people are rich",
        "Some people are neither wise nor rich",
        "All the people are either wise or rich",
      ],
      answer: "All the people are either wise or rich",
    },
    {
      question: "(i) Some cats are good (ii) Some cats are black",
      options: [
        "All black are good",
        "Some good are black",
        "Some black are good",
        "Some good are cats",
      ],
      answer: "Some black are good",
    },
    {
      question:
        "Two letters in the word 'BOXES' have as many letters between them as in the alphabet which one of those two cases first in the alphabet",
      options: ["O", "X", "S", "E"],
      answer: "X",
    },
    {
      question:
        "In the alphabets from A to Z which is the third letter to the right of the letter which is midway between K and S",
      options: ["Q", "I", "R", "O"],
      answer: "R",
    },
    {
      question: "Find out the pair which is dissimilar",
      options: [
        "Air and Oxygen",
        "Teacher and student",
        "Flower and petal",
        "Word and letter",
      ],
      answer: "Air and Oxygen",
    },
    {
      question:
        "If in a certain code 5234 is written as RING and 6109 as FAST how will 095234 be written",
      options: ["STRNIG", "NGRIST", "STRING", "STRIGN"],
      answer: "STRING",
    },
    {
      question:
        "If MONKEY is coded in a certain language as XDJMNL. how TIGER will be coded",
      options: ["SHFDQ", "QDFHS", "SDFHS", "QDH"],
      answer: "QDFHS",
    },
    {
      question: "Platinum is most costlier than silver because",
      options: ["Heavier", "Whitier", "Rarely found", "Harder"],
      answer: "Rarely found",
    },
    {
      question: "Yard is to inch as quart is to",
      options: ["Gollor", "Ounce", "Milk", "Liquid"],
      answer: "Ounce",
    },
  ];

  return (
    <Grid container xs={12} className="gidM">
      {collection[3] == "orange" ? (
        <Paper
          elevation={12}
          className="qcard"
          style={{ borderRadius: "16px" }}
        >
          <Two
            data1={data1}
            data2={data2}
            zone={green}
            collection={collection}
          />
        </Paper>
      ) : collection[3] == null ? (
        <Paper
          elevation={12}
          className="qcard"
          style={{ borderRadius: "16px" }}
        >
          <One data={data} zone={orange} collection={collection} />
        </Paper>
      ) : collection[3] == "green" && scoreRedOrange > (30 / 100) * 70 ? (
        <Paper
          elevation={12}
          className="qcard"
          style={{ borderRadius: "16px" }}
        >
          <Three
            data3={data}
            data1={data1}
            data2={data2}
            collection={collection}
          />
        </Paper>
      ) : (
        <ResultM1 />
      )}
    </Grid>
  );
}
