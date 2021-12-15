package CollegeFinalTest;

class MultilevelInheritence1 {
    int a = 10;
}

class MultilevelInheritence2 extends MultilevelInheritence1 {
    int b = 10;
}

class MultilevelInheritence3 extends MultilevelInheritence2 {
    int c = a + b;
    void show() {
        System.out.println(c);
    }
}

public class MultilevelInheritence {
    public static void main(String[] args) {
        MultilevelInheritence3 multiInheObj = new MultilevelInheritence3();
        
        multiInheObj.show();
    }
}
