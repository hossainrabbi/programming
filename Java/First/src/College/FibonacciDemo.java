package College;

// 0, 1, 1, 2, 3, 5, 8, ........ n.
public class FibonacciDemo {
    public static void main(String [] args) {
        int fNum = 0, sNum = 1, n = 10, fibo;
        System.out.print(fNum + " " + sNum + " ");
            
        for(int i = 3; i <= n; i++) {
            
            fibo = fNum + sNum;
            System.out.print(fibo + " ");
            
            fNum = sNum;
            sNum = fibo;
        }
    }
}
