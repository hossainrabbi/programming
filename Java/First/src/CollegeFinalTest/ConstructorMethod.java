package CollegeFinalTest;

class Person {
    String name = "Hossain";
    int age = 20;
    
    void Person() {
        System.out.println(name);
        System.out.println(age);
    }
}

public class ConstructorMethod {
    public static void main(String[] args) {
        Person p1 = new Person();
        p1.Person();
    }
}
