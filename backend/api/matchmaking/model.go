// models.go
package matchmaking

import (
	"time"

	"github.com/gorilla/websocket"
)

// Player プレイヤー情報を管理する構造体
type Player struct {
	ID       string
	Conn     *websocket.Conn
	JoinedAt time.Time
}

// Room マッチングルームを管理する構造体
type Room struct {
	ID          string
	PlayerID    string // Player1のID
	Player2ID   string
	Player1Conn *websocket.Conn
	Player2Conn *websocket.Conn
	CreatedAt   time.Time
	IsMatched   bool
}

// GameState ゲームの状態を管理する構造体
type GameState struct {
	RoomID    string
	StartTime time.Time
	Status    string // "waiting", "matched", "playing", "finished" など
}

type Question struct {
	ID            int       `json:"id"`
	QuestionText  string    `json:"question_text"`
	CorrectAnswer string    `json:"correct_answer"`
	Choices       [4]string `json:"choices"`
}
