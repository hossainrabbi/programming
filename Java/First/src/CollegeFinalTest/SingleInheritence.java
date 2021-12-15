package CollegeFinalTest;

class Inheritence1{
    int a = 10;
}

class Inheritence2 extends Inheritence1 {
    int b = 15;
    
    void show() {
        System.out.println(a + b);
    }
}

public class SingleInheritence {
    public static void main(String[] args) {
        Inheritence2 inObj = new Inheritence2();
        
        inObj.show();
    }
}
