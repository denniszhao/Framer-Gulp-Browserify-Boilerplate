import java.util.ArrayList;
import java.util.List;

/** The "natural runs" problem, using the Java library.
 *  @author P. N. Hilfinger's evil twin Pierre.
 */
public class Natural {

    /** Return the list of lists formed by breaking up L into "natural runs":
     *  that is, maximal ascending sublists, in the same order as
     *  the original.  For example, if L is (1, 3, 7, 5, 4, 6, 9, 10),
     *  then result is the three-item list ((1, 3, 7), (5), (4, 6, 9, 10)).
     */
    static List<List<Integer>> naturalRuns(List<Integer> L) {
        ArrayList<List<Integer>> result = new ArrayList<List<Integer>>();
        int i;
        i = 0;
        while (i < L.size()) {
            int j;
            j = i;
            while (j + 1 < L.size() && L.get(j) < L.get(j + 1)) {
                j += 1;
            }
            result.add(L.subList(i, j));
            i = j;
        }
        return result;
    }

    /** Break ARGS (a sequence of decimal numerals) into its natural runs and
     *  print them on the standard output. */
    public static void main(String... args) {
        ArrayList<Integer> A = new ArrayList<Integer>();
        for (String x : args) {
            A.add(new Integer(x));
        }
        System.out.printf("naturalRuns(%s) = %s%n", A, naturalRuns(A));
    }
}
