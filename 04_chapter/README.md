# Dot notation vs bracket notation when accessing object properties

To access the property of an object we can use the dot notation or the bracket notation, e.g. myArray.length vs myArray["length"]

We can use the dot notation when the property is a valid variable name and directly names the property. We use the bracket notation when we want whatever is in the brackets to be *evaluated* to get the property name;

    var myArray = [34, 12, 5, 84];

    myArray.length;
    => 4

    myArray["l" + "e" + "n" + "g" + "t" + "h"];
    => 4

In the second example, the expression within the brackets is evaluated first. 