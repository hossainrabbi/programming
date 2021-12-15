package College;

public class OverloadProgram {
    void add(int a, int b) {
        System.out.println(a + b);
    }
    
    void add(double a, double b) {
        System.out.println(a + b);
    }
    
    void add(String fName, String lName) {
        System.out.println(fName + lName);
    }
    
    void add(int a, int b, int c) {
        System.out.println(a + b + c);
    }
    
    void add(){
        System.out.println("Notting");
    }
}
