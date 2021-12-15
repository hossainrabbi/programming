package College;

public class FiboDemo {
    public static void main(String[] args) {
        int f1 = 0, f2 = 1, fibo, n = 10;
        
        for(int i = 0; i <= n; i++) {
            fibo = f1 + f2;
            
            System.out.println(" " + fibo + " ");
            
            f1 = f2;
            f2 = fibo;
        }
    }
}
