package algorithm.floydWarshall;

import java.util.Arrays;

public class FloydWarshall {
    static final int INF = 99999999;

    public static void main(String[] args) {
        int N = 4; // 정점의 개수
        int[][] D = {
                {0, 5, INF, 8},
                {7, 0, 9, INF},
                {2, INF, 0, 4},
                {INF, INF, 3, 0},
        };

        // 플로이드 와샬
        // k: 경유하는 노드, i: 출발 노드, j: 도착 노드
        for (int k = 0; k < N; k++) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    D[i][j] = Math.min(D[i][k] + D[k][j], D[i][j]);  // 경유하거나 직접가거나 더 짧은 경로로 대체
                }
            }
        }

        // 결과 출력
        for (int[] row : D) System.out.println(Arrays.toString(row));
    }
}