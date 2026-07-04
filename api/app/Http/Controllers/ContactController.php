<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Store a newly created contact or newsletter submission.
     */
    public function store(Request $request): JsonResponse
    {
        $type = $request->input('type', 'contact');

        if ($type === 'newsletter') {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email|max:255',
                'type' => 'required|in:contact,newsletter',
            ]);
        } else {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string',
                'type' => 'required|in:contact,newsletter',
            ]);
        }

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $contact = Contact::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'message' => $request->input('message'),
            'type' => $type,
        ]);

        return response()->json([
            'success' => true,
            'message' => $type === 'newsletter' 
                ? 'Thank you for subscribing to our launch updates!' 
                : 'Your message has been received. Our team will contact you shortly.',
            'data' => $contact,
        ], 201);
    }
}
