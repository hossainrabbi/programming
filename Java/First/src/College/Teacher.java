package College;

public class Teacher extends Person {
    String qualification;
    
    void displayItem2() {
        displayItem1();
        System.out.println("Qualification: " + qualification);
    }
}
