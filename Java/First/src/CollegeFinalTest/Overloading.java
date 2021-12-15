package CollegeFinalTest;

class Over {
    void add(int a, int b) {
        System.out.println(a + b);
    }
    
    void add(float a, float b) {
        System.out.println(a + b);
    }
    
    void add(int a) {
        System.out.println(a);
    }
}

public class Overloading {
    public static void main(String[] args) {
        Over obr = new Over();
        
        obr.add(10, 5);
        obr.add(10.6f, 5.6f);
        obr.add(10);
    }
}
