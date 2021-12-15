
package CollegeFinalTest;

interface InterFace {
    static final int roll = 119939;
}

class InterfaceClass implements InterFace {
        public void show() {
        float result = 85.6f;
        
        System.out.println("Roll: " + roll);
        System.out.println("Result: " + result);
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        InterfaceClass interFacObj = new InterfaceClass();
        
        interFacObj.show();
    }
}