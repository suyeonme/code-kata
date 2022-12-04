package algorithm;

import java.util.ArrayList;
import java.util.Arrays;

public class BipartiteMatching {
    public static final int MAX = 101; // 최대 노드 개수
    public static ArrayList<ArrayList<Integer>> graph = new ArrayList<ArrayList<Integer>>();
    static int[] d = new int[MAX]; // 특정 노드를 점유하고 있는 노드
    static boolean[] checked = new boolean[MAX]; // 특정 노드 처리 여부
    static int V = 3; // 노드의 개수

    static boolean dfs(int x) {
        // 연결된 모든 노드에 대해서 점유할 수 있는지 확인
        for(int i = 0; i < graph.get(x).size(); i++) {
            int t = graph.get(x).get(i);
            if(checked[t]) continue; // 이미 처리한 노드는 건너뜀
            checked[t] = true; // 처리 완료

            if(d[t] == 0 || dfs(d[t])) {
                // 비어있거나 점유 노드에 들어갈 공간이 있는 경우
                d[t] = x;
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // 인접행렬 초기화
        for(int i = 0; i < MAX; i++) {
            graph.add(new ArrayList<Integer>());
        }

        graph.get(1).add(1);
        graph.get(1).add(2);
        graph.get(1).add(3);
        graph.get(2).add(1);
        graph.get(3).add(2);

        int count = 0; // 매칭 개수

        for(int i = 1; i <= V; i++) {
            Arrays.fill(checked, false);
            if(dfs(i)) count++;
        }
        System.out.println("매칭 개수: " + count);

        // 매칭 정보 출력
        for(int i = 1; i < MAX; i++) {
            if(d[i] != 0) {
                System.out.println(d[i] + " -> " + i);
            }
        }
    }
}
