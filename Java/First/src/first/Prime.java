package first;

public class Prime{
    public static void main(String args[]) {
        int i, j;
        
        System.out.println("Serice of prime number upto 25");
        
        for(i = 2; i <= 25; i++){
            for(j = 2; j <=i; j++){
                if(i == j){
                    System.out.println(i);
                }
                
                if(i%j == 0){
                    break;
                }
            }
        }
    }
}