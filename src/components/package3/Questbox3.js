import React, { useState, useEffect } from "react";
import base from "../../config/FbConfig";
import "../package1/questions.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Question3 from "./Question3";

export default function Questbox3(props) {
  /* const [data, setData] = useState([]); */
  const collection = props.location.state;
  const score3 = localStorage.getItem("score3");
  // console.log(score3);
  /* useEffect(() => {
    const unsubscribe = base
      .firestore()
      .collection("QuestionTypes")
      .doc(collection)
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

  console.log(); */
  const data = [
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

  return (
    <Grid container xs={12} className="gidM">
      <Paper elevation={12} className="qcards" style={{ borderRadius: "16px" }}>
        <Question3 data={data} collection={collection} />
      </Paper>
    </Grid>
  );
}
